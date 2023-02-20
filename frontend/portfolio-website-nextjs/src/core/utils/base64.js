const encodeToBase64 = (str) => Buffer.from(str, "utf8").toString("base64");
const decodeFromBase64 = (str) => Buffer.from(str, "base64");

export {encodeToBase64, decodeFromBase64}