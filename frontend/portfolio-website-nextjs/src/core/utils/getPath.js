const getPath = (path = "") => {
  const hostname = () => {
    if (process.env.NODE_ENV === "development") {
      return "http://localhost:3000";
    }

    if (process.env.NODE_ENV === "gh-pages") {
      return "https://paulalexserban.github.io";
    }
  };

  const basePath = () => {
    if (process.env.NODE_ENV === "development") {
      return "";
    }

    if (process.env.NODE_ENV === "gh-pages") {
      return `/${process.env.BASE_PATH}`;
    }
  };

  return `${hostname()}${basePath()}${path}`;
};

export default getPath;
