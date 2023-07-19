const { readdirSync, readFileSync, statSync } = require("fs");
const { resolve, join } = require("path");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
require("dotenv").config({ path: resolve(__dirname, "..", "..", ".env"), debug: true });
var mime = require("mime-types");

const REGION = process.env.S3_BUCKET_REGION;

// Create an S3 client
const s3 = new S3Client({ region: REGION });

const BUCKET_NAME = process.env.S3_ASSETS_BUCKET;
const ASSETS_PATH = resolve(__dirname, "..", "dist");

async function uploadDirectory(directory, prefix) {
    const entries = readdirSync(directory);

    for (const entry of entries) {
        const entryPath = resolve(directory, entry);
        const s3Key = join(prefix, entry);

        if (statSync(entryPath).isFile()) {
            const fileContent = readFileSync(entryPath);

            const params = {
                Bucket: BUCKET_NAME,
                Key: s3Key,
                Body: fileContent,
                ContentType: mime.lookup(entry),
            };

            await s3.send(new PutObjectCommand(params));
            console.log(`Successfully uploaded file "${s3Key}" to S3 bucket "${BUCKET_NAME}"`);
        } else if (statSync(entryPath).isDirectory()) {
            await uploadDirectory(entryPath, s3Key);
        }
    }
}

async function main() {
    try {
        await uploadDirectory(ASSETS_PATH, '');
        console.log(`Successfully uploaded all files in directory "${ASSETS_PATH}" to S3 bucket "${BUCKET_NAME}"`);
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}

main();
