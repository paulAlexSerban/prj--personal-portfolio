const fs = require('fs');
const path = require('path');
const https = require('https');
const dotenv = require('dotenv');

const { NODE_ENV } = process.env;

NODE_ENV === 'development' && dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });

const OUT_DIR = 'out';
const outDitPath = path.join(__dirname, '..', '..', OUT_DIR);

const { SITE_HOSTNAME, SITE_URL, INDEX_NOW_API_KEY } = process.env; // example.eu

const searchEngineHosts = [
    'api.indexnow.org',
    // 'www.google.com',
    // 'www.bing.com',
    // 'search.seznam.cz',
    // 'yandex.com',
    // 'searchadvisor.naver.com',
];

if (!SITE_HOSTNAME || !SITE_URL || !INDEX_NOW_API_KEY || !NODE_ENV) {
    console.error('Missing env variables');
    console.log({
        SITE_HOSTNAME,
        SITE_URL,
        INDEX_NOW_API_KEY,
        searchEngineHosts,
    });
    process.exit(1);
}

const getAllGeneratedPages = (dir) => {
    let fileList = [];
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);

        if (fs.statSync(fullPath).isDirectory()) {
            // recursively get all files in subdirectories
            fileList = [...fileList, ...getAllGeneratedPages(fullPath)];
        } else if (fullPath.endsWith('.html')) {
            // remove dist dir and .html extension
            let urlPath = `${SITE_URL}${fullPath.replace(OUT_DIR, '').replace('.html', '').replace(/\\/g, '/')}`;
            if (urlPath.endsWith('/index')) {
                // remove /index.html from url path as it is not needed
                urlPath = urlPath.substring(0, urlPath.length - 6); // remove /index
            }
            fileList.push(urlPath);
        }
    }

    return fileList;
};

const generateKeyLocationFile = (outDir) => {
    const content = `${INDEX_NOW_API_KEY}`;
    const filePath = `${outDir}/${INDEX_NOW_API_KEY}.txt`;
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`File ${filePath} has been created`);
    });
};

const notifySearchEngines = (urls = [], searchEngineHost, dryRun = false) => {
    const searchEngine = `https://${searchEngineHost}/indexnow`;
    const payload = {
        host: SITE_HOSTNAME,
        key: INDEX_NOW_API_KEY,
        keyLocation: `${SITE_URL}/${INDEX_NOW_API_KEY}.txt`,
        urlList: urls,
    };

    console.log('Notify search engines:', searchEngine, payload);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Host: searchEngineHost,
        },
    };

    if (dryRun) {
        console.log('[DRY-RUN] Would send notifications for:', urls);
    } else {
        const req = https.request(searchEngine, options, (res) => {
            console.log(`Sent notifications to ${searchEngineHost}. Status Code: ${res.statusCode}`);
        });

        req.on('error', (error) => {
            console.error(`Failed to send notifications to ${searchEngineHost}. Error: ${error.message}`);
        });

        req.write(JSON.stringify(payload));
        req.end();
    }
};

const pages = getAllGeneratedPages(outDitPath);
generateKeyLocationFile(outDitPath);

for (const searchEngineHost of searchEngineHosts) {
    console.log(`NODE_ENV is ${NODE_ENV} - INDEX_NOW_API_KEY is ${INDEX_NOW_API_KEY} - notifying ${searchEngineHost}`);
    const isDryRun = process.argv[2] === '--dry-run';
    notifySearchEngines(pages, searchEngineHost, isDryRun);
}
