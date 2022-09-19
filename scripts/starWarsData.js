const API = "https://swapi.dev/api";

// Get Luke Skywalker
export const fetchLuke = async () => {
  const dataFetch = await fetch(`${API}/species`);
  const jsonData = await dataFetch.json();
  return jsonData;
};

export const fetchStarshipsCount = async () => {
  const dataFetch = await fetch(`${API}/starships/?page=4`);
  const jsonData = await dataFetch.json();
  console.log(jsonData)
  return jsonData;
};


