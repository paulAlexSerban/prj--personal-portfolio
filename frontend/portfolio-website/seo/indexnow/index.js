const fs = require('fs');
const path = require('path');
const https = require('https');
const dotenv = require('dotenv');

const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development') {
    dotenv.config({ path: path.resolve(__dirname, '../../.env.development') });
}

const { SITE_HOSTNAME, SITE_URL, INDEX_NOW_API_KEY } = process.env; // example.eu
const searchEngineHosts = [
    'api.indexnow.org',
    'www.google.com',
    'www.bing.com',
    'search.seznam.cz',
    'yandex.com',
    'searchadvisor.naver.com',
];

console.log({
    SITE_HOSTNAME,
    SITE_URL,
    INDEX_NOW_API_KEY,
    searchEngineHosts,
});
// const apiHost = 'api.indexnow.org';

const getAllGeneratedPages = (dir) => {
    let fileList = [];
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);

        if (fs.statSync(fullPath).isDirectory()) {
            fileList = [...fileList, ...getAllGeneratedPages(fullPath)];
        } else if (fullPath.endsWith('.html')) {
            let urlPath = `${SITE_URL}${fullPath.replace('out', '').replace('.html', '').replace(/\\/g, '/')}`;
            if (urlPath.endsWith('/index')) {
                urlPath = urlPath.substring(0, urlPath.length - 6); // remove /index
            }
            fileList.push(urlPath);
        }
    }

    return fileList;
};

const generateKeyLocationFile = () => {
    const content = `${INDEX_NOW_API_KEY}`;
    const filePath = `out/${INDEX_NOW_API_KEY}.txt`;
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
        host: SITE_HOSTNAME, // Replace with the appropriate value or env variable
        key: INDEX_NOW_API_KEY, // Replace with the appropriate value or env variable
        keyLocation: `${SITE_URL}/${INDEX_NOW_API_KEY}.txt`, // Replace with the appropriate value or env variable
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
            console.log(`Sent notifications. Status Code: ${res.statusCode}`);
        });

        req.on('error', (error) => {
            console.error(`Failed to send notifications. Error: ${error.message}`);
        });

        req.write(JSON.stringify(payload));
        req.end();
    }
};

const pages = getAllGeneratedPages('out');
generateKeyLocationFile();

for (const searchEngineHost of searchEngineHosts) {
    notifySearchEngines(pages, searchEngineHost, process.argv[2] === '--dry-run');
}