const getPath = (path = "") => {
  let basePath = "";
  if (process.env.NODE_ENV === "production") {
    basePath = process.env.BASE_PATH;
  }

  return `${basePath}${path}`;
};

export default getPath;
