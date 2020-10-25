
const sfetch = async (url: string, ...arg: any[]) => {
  const res = await fetch(url, ...arg);
  return res.json();
};

export default sfetch;
