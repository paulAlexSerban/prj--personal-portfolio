const getPageDescription = (string) => {
  if(string.length > 150) {
    return `${string.slice(0, 147)}...`;
  }
  return string;
}

export default getPageDescription;