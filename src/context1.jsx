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
    // ENDPOINT MAPPING
    //meals endpoint pagal type
    let endpoint = "/search.php?s="; // default (empty)
    const q = query.trim();
    if (q) {
        if (searchType === "name") endpoint = `/search.php?s=${encodeURIComponent(q)}`;
        if (searchType === "firstLetter") endpoint = `/search.php?f=${encodeURIComponent(q[0] || "")}`;
        if (searchType === "ingredient") endpoint = `/filter.php?i=${encodeURIComponent(q)}`;
        if (searchType === "category") endpoint = `/filter.php?c=${encodeURIComponent(q)}`;
        if (searchType === "area") endpoint = `/filter.php?a=${encodeURIComponent(q)}`;
    } else {
        //kad nerodytu klaidos empty query search
        endpoint = `/search.php?s=`;
    }

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