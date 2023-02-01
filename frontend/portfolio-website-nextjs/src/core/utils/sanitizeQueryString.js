const sanitizeQueryString = (
    string = "String to be sanitized from spaces.dots/and/slashes"
) => {
    return string
        .toLowerCase()
        .split(" ")
        .join("")
        .split(".")
        .join("")
        .split("/")
        .join("");
};

export default sanitizeQueryString;