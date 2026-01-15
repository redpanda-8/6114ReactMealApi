const API_ENDPOINT = "https://www.themealdb.com/api/json/v1/1";

const fetchMeal = async (path) => {
  const response = await fetch(`${API_ENDPOINT}${path}`);
  if (!response.ok) {
    throw new Error("Network error");
  }
  const json = await response.json();
  return json.meals || [];
};

export default fetchMeal;