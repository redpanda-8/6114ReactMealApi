import { useEffect, useState } from "react";

const API_ENDPOINT = "https://www.themealdb.com/api/json/v1/1";

const getMeal = (urlParams) => {
    const [isLoading, setIsLoading] = useState(true); //for spinner
    const [error, setError] = useState({ show: false, msg: "" });
    const [data, setData] = useState(null);

    const fetchMeals = async (url) => {
        setIsLoading(true);//for spinner
        try {
        const response = await fetch(url);
        const json = await response.json();
        //error handling api: kai nieko neranda MealDB grąžina { "meals": null }
        if (json && json.meals) {
            setData(json.meals);
            setError({ show: false, msg: "" });
        } else {
            setData([]);
            setError({ show: true, msg: "No meals found" });
        }
        setIsLoading(false);
        } catch (err) { //network Error handing-jei ner wifi, api neatsako, fetch nuluzta
        setData([]);
        setError({ show: true, msg: "Something went wrong" });
        setIsLoading(false);//for spinner
        }
    };
    useEffect(() => {
        if (!urlParams) return;
        fetchMeals(`${API_ENDPOINT}${urlParams}`);
    }, [urlParams]);

    return { isLoading, error, data };
};
export default getMeal;