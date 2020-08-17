export function fetchSpacex(queryString) {
  queryString = queryString.replace("?", "&");
  const url = `https://api.spacexdata.com/v3/launches?limit=100${queryString}`;
  console.log("url", url);
  return fetch(url).then((res) => res.json());
}
