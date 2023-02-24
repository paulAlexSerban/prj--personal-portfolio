const getPath = (path = "") => {
  const hostname = () => {
    if (process.env.SERVER_ENV === "development") {
      return "http://localhost:3000";
    }

    if (process.env.SERVER_ENV === "gh_pages") {
      return "https://paulalexserban.github.io";
    }

    if (process.env.SERVER_ENV === "production") {
      return "https://www.paulserban.eu";
    }
  };

  const basePath = () => {
    if (process.env.SERVER_ENV === "development" || process.env.SERVER_ENV === "production") {
      return "";
    }

    if (process.env.SERVER_ENV === "gh_pages") {
      return `${process.env.BASE_PATH}`;
    }
  };

  return `${hostname()}${basePath()}${path}`;
};

export default getPath;
