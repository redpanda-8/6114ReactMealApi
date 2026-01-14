import { useEffect, useState } from "react";
const API_ENDPOINT = "https://www.themealdb.com/api/json/v1/1";

const getCategories = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: "" });
    const [data, setData] = useState(null);

    const fetchCategories = async () => {
        setIsLoading(true);
        try {
        const response = await fetch(`${API_ENDPOINT}/categories.php`);
        const json = await response.json();

        if (json && json.categories) {
            setData(json.categories);
            setError({ show: false, msg: "" });
        } else {
            setData([]);
            setError({ show: true, msg: "No categories found" });
        }
        setIsLoading(false);
        } catch (err) {
          setData([]);
          setError({ show: true, msg: "Something went wrong" });
          setIsLoading(false);
        }
    };
    useEffect(() => {fetchCategories(); }, []);

    return { isLoading, error, data };
};
export default getCategories;