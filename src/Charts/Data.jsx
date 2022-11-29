const fetchText = async (url) => {
  const response = await fetch(url);
  return await response.text();
};
const csvUrl = "https://gist.githubusercontent";

fetchText(csvUrl).then((text) => {
  console.log(text);
});
