import {useEffect, useState} from "react";
//useState-store data(loading,error,movies) useEffect-run code when smthn changes-API call

const apiKey = import.meta.env.VITE_API_KEY
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${apiKey}`;
//creates custom React Hook (params= &s=matrix)
const getMovie = (urlParams) => {
    const [isLoading, setIsLoading] = useState(true); //tracks data fetch-TRUE cause we fetch immediately
    const [error, setError] = useState({show:false, msg:''}); //show err? > msg from API
    const [data, setData] = useState(null); //movie list(Search)/1movie - null cause nothing is fetched yet

    const fetchMovies = async (url) =>{
        setIsLoading(true)
        //start error-safe block-prevents app crash if fetch fails
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Response === 'True') { //not HTTP status, it’s API-specific
                setData(data.Search || data); //data.Search-array . data-1movie object
                setError({show: false, msg: ''}); //del previous errs
            } else {
                setError({show: true, msg: data.Error});
            }
            setIsLoading(false) //fetch finished > stop loading spinner
        }catch(err){
            console.log(err) //catch network errs/fetch failures
        }
    }
    //runs code when component renders OR dependencies change
    useEffect(() => {
        fetchMovies(`${API_ENDPOINT}${urlParams}`)
    },[urlParams]) //dependency array-RE-FETCH movies only when urlParams changes(search query)
    return {isLoading, error, data} //returns data to components(context renamed data > movies)
}

export default getMovie