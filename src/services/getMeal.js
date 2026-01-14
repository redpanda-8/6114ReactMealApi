import { useEffect, useState } from "react";

const API_ENDPOINT = "https://www.themealdb.com/api/json/v1/1";

const getMeal = (urlParams) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: "" });
    const [data, setData] = useState(null);

    const fetchMeals = async (url) => {
        setIsLoading(true);
        try {
        const response = await fetch(url);
        const json = await response.json();
        //api: kai nieko neranda-meals: null
        if (json && json.meals) {
            setData(json.meals);
            setError({ show: false, msg: "" });
        } else {
            setData([]);
            setError({ show: true, msg: "No meals found" });
        }
        //bugu lendas -_- 
        setIsLoading(false);
        } catch (err) {
        setData([]);
        setError({ show: true, msg: "Something went wrong" });
        setIsLoading(false);
        }
    }; //pavargau kdl nepaima params :(
    useEffect(() => {
        fetchMeals(`${API_ENDPOINT}${urlParams}`);
    }, [urlParams]);

    return { isLoading, error, data };
};
export default getMeal;