const { S3Client, ListObjectsV2Command, GetObjectCommand } = require('@aws-sdk/client-s3');
const { resolve, join, dirname } = require('path');
const { createWriteStream, mkdirSync, statSync, existsSync } = require('fs');

require("dotenv").config({ path: resolve(__dirname, "..", "..", "..", ".env"), debug: true });

const REGION = process.env.S3_BUCKET_REGION;
const BUCKET_NAME = process.env.S3_ASSETS_BUCKET;
const LOCAL_DIRECTORY_PATH = resolve(__dirname, "..", "public");

console.log({ REGION, BUCKET_NAME, LOCAL_DIRECTORY_PATH });

// Create an S3 client
const s3 = new S3Client({ region: REGION });

async function main() {
    try {
        // List all objects in the bucket
        const { Contents: objects } = await s3.send(new ListObjectsV2Command({ Bucket: BUCKET_NAME }));

        // Download each object to the local directory
        for (const object of objects) {
            const { Key } = object;

            // Skip directory markers
            if (Key.endsWith('/')) {
                continue;
            }

            const localFilePath = join(LOCAL_DIRECTORY_PATH, Key);

            // Check if file exists and was downloaded less than 24 hours ago
            if (existsSync(localFilePath)) {
                const stats = statSync(localFilePath);
                const currentTime = new Date();
                const elapsedTime = currentTime - new Date(stats.mtime);

                if (elapsedTime < 24 * 60 * 60 * 1000) {  // Less than 24 hours
                    console.log(`[ INFO ] Skipping download for '${Key}', already downloaded`);
                    continue;
                }
            }

            // Ensure the directory structure exists
            mkdirSync(dirname(localFilePath), { recursive: true });

            try {
                // Stream the S3 object to a file
                const writeStream = createWriteStream(localFilePath);
                // console.log(`[ INFO ] Downloading '${Key}' to '${localFilePath}'...`);

                const getObjectResponse = await s3.send(
                    new GetObjectCommand({
                        Bucket: BUCKET_NAME,
                        Key,
                    })
                );

                const totalSize = getObjectResponse.ContentLength;  // Total file size in bytes
                let downloadedSize = 0;  // Downloaded size in bytes

                const downloadStream = getObjectResponse.Body;

                // Listen for data event to update progress
                downloadStream.on('data', (chunk) => {
                    downloadedSize += chunk.length;
                    const progress = (downloadedSize / totalSize * 100).toFixed(2);
                    process.stdout.write(`\r[ INFO ] Download progress: ${progress}%   `); // Overwrites the line in the terminal
                });

                // Listen for end event to indicate download completion
                downloadStream.on('end', () => {
                    console.log(`Downloaded '${Key}' to '${localFilePath}'`);
                });

                downloadStream.pipe(writeStream);

            } catch (fileError) {
                console.error(`[ ERROR ] Could not download file '${Key}': ${fileError}`);
            }
        }
    } catch (error) {
        console.error(`[ ERROR ] ${error}`);
    }
}

main();
