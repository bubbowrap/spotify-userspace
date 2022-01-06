// Helpers

export const getHashParams = () => {
  const hashParams: any = {};
  let e;
  const r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};

export const durationConversion = (ms: number) => {
  const date = new Date(ms);
  return `${date.getMinutes()}:${date.getSeconds()}`;
};
