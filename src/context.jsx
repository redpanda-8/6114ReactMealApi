import React, { useContext, useState } from "react";
import getMeal from "./services/getMeal.js";
import getCategories from "./services/getCategories.js";
//context objektas (VIDINIS)
const Context = React.createContext();
//wrapper kad rasyti <AppContext value=...>
const AppContext = ({ value, children }) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("name");
    //categories(tik navui)
    const {
        isLoading: isLoadingCategories,
        error: categoriesError,
        data: categories,
    } = getCategories();
    // ENDPOINT MAPPING ----------------------- TEST1
    //meals endpoint pagal type
    const buildEndpoint = (type, q) => {
        const text = (q || "").trim();

        // jeigu empty query -> nieko nefetchinam (kad nebunu "No meals found" be reikalo)
        if (!text) return null;

        if (type === "name") {
        // https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
            return `/search.php?s=${encodeURIComponent(text)}`;
        }
        if (type === "firstLetter") {
        // https://www.themealdb.com/api/json/v1/1/search.php?f=a
        const first = text[0] || "";
            return `/search.php?f=${encodeURIComponent(first)}`;
        }
        if (type === "ingredient") {
        // https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
            return `/filter.php?i=${encodeURIComponent(text)}`;
        }

        if (type === "category") {
        // https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
            return `/filter.php?c=${encodeURIComponent(text)}`;
        }

        if (type === "area") {
        // https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
            return `/filter.php?a=${encodeURIComponent(text)}`;
        }

        // default fallback
        return `/search.php?s=${encodeURIComponent(text)}`;
    };
    const endpoint = buildEndpoint(searchType, query);
    //meals pagal endpoint (jei endpoint=null - nieko nefetchinam)
    const { isLoading: isLoadingMeals, error: mealsError, data: meals } = getMeal(endpoint);

    const error = mealsError || { show: false, msg: "" };

    return (
        <AppContext value={{query, setQuery, searchType, setSearchType, meals, isLoadingMeals, 
            mealsError, categories, isLoadingCategories, categoriesError, error}}>
        {children}
        </AppContext>
    );
};

export const useGlobalContext = () => {
    return useContext(Context);
};

export { AppContext, AppProvider };