---
title: "Encoding and Decoding base64 Strings"
category: "snippet"
status: "published"
tags:
  - "JavaScript"
  - "Encoding"
  - "Decoding"
  - "Base64"
date: "June 1, 2019"
---

## The Web-browser Way

- `btoa` and `atob` are built-in functions in web browsers for encoding and decoding strings using the base64 algorithm. `btoa` encodes a string as base64, while `atob` decodes a base64-encoded string.

```javascript
const str = "Hello, world!";
const encoded = btoa(str);
console.log(encoded); // "SGVsbG8sIHdvcmxkIQ=="

const decoded = atob(encoded);
console.log(decoded); // "Hello, world!"
```

## The Node.js Way

- `Buffer.from` is a built-in method in Node.js for creating a new buffer from a given input. It can create a buffer from a string, an array, or other data types, and it can also specify the character encoding used to convert a string to a buffer.

```javascript
const str = "Hello, world!";
const encoded = Buffer.from(str).toString("base64");
console.log(encoded); // "SGVsbG8sIHdvcmxkIQ=="

const decoded = Buffer.from(encoded, "base64").toString();
console.log(decoded); // "Hello, world!"
```

## What is the difference?

The key difference between these methods is their purpose and the environment in which they are used. `btoa` and `atob` are used specifically for encoding and decoding strings as base64 in web browsers. They are not available in Node.js, and they do not work with other types of data, such as buffers.

`Buffer.from`, on the other hand, is used for creating buffers from various types of data in Node.js. Buffers can be used to represent binary data, and they have a range of methods for reading, writing, and manipulating binary data. `Buffer.from` can also convert a string to a buffer, but it is not limited to working with strings, and it can specify the character encoding used to convert a string to a buffer.

In summary, `btoa` and `atob` are used for encoding and decoding strings as base64 in web browsers, while `Buffer.from` is used for creating buffers from various types of data in Node.js, including strings.