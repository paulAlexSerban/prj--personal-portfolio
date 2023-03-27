const sanitizeQueryString = (string, pattern = /[\s./-]/g) => {
	if (typeof string !== "string") {
		throw new Error("Input must be a string");
	}
	return string.toLowerCase().replace(pattern, "");
};

export default sanitizeQueryString;
