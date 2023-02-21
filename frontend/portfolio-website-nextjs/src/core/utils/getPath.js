const getPath = (path = "") => {
  let basePath = undefined;
  if (process.env.NODE_ENV === "gh_pages") {
    basePath = "/prj--personal-portfolio";
  } else if(process.env.NODE_ENV === "development") {
    basePath = "";
  }
  return `${basePath}${path}`
}

export default getPath;