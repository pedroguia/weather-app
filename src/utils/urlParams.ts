export const getUrlParam = (param: string): string | null => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams.get(param);
};

export const addUrlParam = (param: string, value: string): void => {
  const url = new URL(window.location.href);
  url.searchParams.set(param, value);
  window.history.pushState({ path: url.href }, "", url.href);
};

export const removeUrlParam = (param: string): void => {
  const url = new URL(window.location.href);
  url.searchParams.delete(param);
  window.history.pushState({ path: url.href }, "", url.href);
};
