export function fetchSpacex(queryString) {
  queryString = queryString.replace("?", "&");
  const url = `https://api.spacexdata.com/v3/launches?limit=100${queryString}`;
  return fetch(url).then((res) => res.json());
}
