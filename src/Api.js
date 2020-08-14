export function fetchSpacex() {
  const url = "https://api.spacexdata.com/v3/launches?limit=100";
  return fetch(url).then((res) => res.json());
}
