export const getUrlWithParams = (url, params) => {
  return `${url}?` + new URLSearchParams(params).toString();
};
