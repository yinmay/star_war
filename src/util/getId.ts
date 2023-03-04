export const getIdFromUrl = (url: string) => {
  let index = url.substr(0, url.length - 1).lastIndexOf("/");
  let id = url.substring(index + 1, url.length - 1);
  return id;
};
