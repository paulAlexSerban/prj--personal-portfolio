---
title: Capitalize the first letter in a word with JavaScript
category: snippet
status: published
tags:
    - "JavaScript"
date: 01/01/2019
excerpt: "Capitalizing the first letter in a string is a common task in programming, Whether you are working on a personal project or developing for a client, you may need to format text in a specific way."
---

## Use Cases

-   User Input Formatting - capitalizing the first letter in a user's name can improve the overall appearance and readability of the data
-   Titles and Headings - help make titles and headings standout and more visually appealing.
-   User Interface Text - capitalizing the first letter of each work in a button label or menu item can improve the legibility and clarity fo the text
-   Text Analytics - can help distinguish between different types of words, such as proper nouns and common nouns
-   File and Folder naming - makes it easier to locate specific files or folders
-   Email Addresses - improve overall appearance and readability
-   Text Messaging - improve readability and legibility of the text
-   Book Titles and Chapter Headings - help the text standout and be more recognizable
-   Address Labels - in mail processing to improve readability and accuracy of the address
-   Search engine Optimization - capitalizing the first letter of each work in a title tag or meta description can help improve the visibility and ranking of a web page in search engine results

## Method 1 - `charAt()`, `slice()`, `toUpperCase()`

```javascript
const word = "hello world";
const firstLetter = word.charAt(0); // => h
const remainingLetters = word.substring(1); // => ello
const capitalFirstLetter = firstLetter.toUpperCase(); // => H
const capitalizedWord = capitalFirstLetter + remainingLetters; // => Hello
```

```javascript
const word = "hello world";
const capitalized = `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
```

## Method 2 - `replace()` and Regular Expressions

```javascript
let string = "hello world";
let capitalizedString = string.replace(/^\w/, (c) => c.toUpperCase());
```

## Method 3 - Destructuring and Template Literals

```javascript
let string = "hello world";
let capitalizedString = `${string[0].toUpperCase()}${string.slice(1)}`;
```

## Method 4 - `split()` into an Array, `map()` and `join()` into back into a String

```javascript
let string = "hello world";
let capitalizedString = string
    .split("")
    .map((char, index) => (index === 0 ? char.toUpperCase() : char))
    .join("");
```


## Method 5 - `substr()` and `toUppercase()`

```javascript
let string = "hello world";
let capitalizedString = string.substr(0,1).toUpperCase + string.substr(1);
```

## Method 6 - `slice()` and `toUppercase()`

```javascript
let string = "hello world";
let capitalizedString = string.slice(0,1).toUpperCase + string.slice(1);
```