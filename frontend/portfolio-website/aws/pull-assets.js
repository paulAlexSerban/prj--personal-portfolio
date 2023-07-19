const { S3Client, ListObjectsCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const path = require("path");
const fs = require("fs");
// require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, "..", "..", "..", ".env") });

const REGION = process.env.S3_BUCKET_REGION;
const BUCKET_NAME = process.env.S3_ASSETS_BUCKET;
const LOCAL_DIRECTORY_PATH = path.resolve(__dirname, "..", "public");

console.log({ REGION, BUCKET_NAME, LOCAL_DIRECTORY_PATH });

// Create an S3 client
const s3 = new S3Client({ region: REGION });

async function main() {
    try {
        // List all objects in the bucket
        const { Contents: objects } = await s3.send(new ListObjectsCommand({ Bucket: BUCKET_NAME }));
        // console.log({ objects });
        // Download each object to local directory
        for (const object of objects) {
            const Key = object.Key;
            const localFilePath = path.join(LOCAL_DIRECTORY_PATH, Key);

            // Ensure the directory structure exists
            fs.mkdirSync(path.dirname(localFilePath), { recursive: true });

            // Stream the S3 object to a file
            const writeStream = fs.createWriteStream(localFilePath);
            console.log(`Downloading '${Key}' to '${localFilePath}'...`);
            const { Body: downloadStream } = await s3.send(
                new GetObjectCommand({
                    Bucket: BUCKET_NAME,
                    Key,
                })
            );

            downloadStream.pipe(writeStream);
            console.log(`Downloaded '${Key}' to '${localFilePath}'`);
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

main();
