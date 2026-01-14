import { useEffect, useState } from "react";

const API_ENDPOINT = "https://www.themealdb.com/api/json/v1/1";

const getCategories = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: "" });
    const [data, setData] = useState(null);

    const fetchCategories = async () => {
        setIsLoading(true);
        try { //pagauk cat
        const response = await fetch(`${API_ENDPOINT}/categories.php`);
        const json = await response.json();
            // uzkniso cia jau mane viskas
        if (json && json.categories) {
            setData(json.categories);
            setError({ show: false, msg: "" });
        } else {
            setData([]);
            setError({ show: true, msg: "No categories found" });
        }
        setIsLoading(false);
        } catch (err) { //tuoj pridesiu consolelogu visur kdl nk nerodo
          setData([]);//nznau kdl jam sito reikia
          setError({ show: true, msg: "Something went wrong" });
          setIsLoading(false);
        }
    };

    useEffect(() => {fetchCategories(); }, []);

    return { isLoading, error, data };
};
export default getCategories;