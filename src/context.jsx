// import React, {useContext, useState} from "react";
// import getMovie from "./services/getMovie.js";
// const AppContext = React.createContext();
// const AppProvider = ({children}) =>{
//     const [query, setQuery] = useState("matrix");
//     const {isLoading, error, data: movies} = getMovie(`&s=${query}`)
//     return(
//         <AppContext value={{isLoading, error,movies,query, setQuery}}>
//             {children}
//         </AppContext>
//     )
// }
// export const useGlobalContext = ()=>{
//     return useContext(AppContext)
// }
// export {AppContext, AppProvider};

import React, { useContext, useState } from "react";
import getMeal from "./services/getMeal.js";
import getCategories from "./services/getCategories.js";
//context objektas (VIDINIS)
const Context = React.createContext();
//AppContext kaip "wrapper" komponentas kad rašyti <AppContext value={...}>{children}</AppContext>
// const AppProvider = ({ children }) => {
//     const [query, setQuery] = useState("");
//     const [searchType, setSearchType] = useState("name");
const AppContext = ({ value, children }) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("name");

    // categories
    const {
        isLoading: isLoadingCategories,
        error: categoriesError,
        data: categories,
    } = getCategories();

    // meals endpoint pagal type
    let endpoint = "/search.php?s="; // default (empty)
    const q = query.trim();
    //nafik sita sh confusing cia viskas, bug'u lendas :D uzkniso jau
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