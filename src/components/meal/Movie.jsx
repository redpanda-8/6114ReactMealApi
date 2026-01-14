import {useParams, Link} from "react-router-dom";
import getMovies from "../../services/getMovie.js";
//useParams() - reads dynamic parts of URL - /movies/:id - gives access to ID. Link - used for no page reload
//getMovies - hook that fetch data from OMDb API - reuse for movie list, 1movie details
//Creating Movie component - renders when url is  /movies/:id
const Movie = () => {
    //read ID from URL > /movies/tt12345678  -  useParams() returns object of URL params
    const {id} = useParams()
    //FETCH 1MOVIE - calls getMovie - OMDb API interprets i as IMDb ID > isLoad,err,data renamed to movie > movie.Title
    //FETCH RUNS AUTOmatically bacause getMovie uses useEffect
    const {isLoading, error, data:movie} = getMovies(`&i=${id}`);
    //if loading - show spinner, stop rendering rest of jsx component too early
    if(isLoading){
        return <div className="loading"></div>
    }
    //if API returned err - showd err UI instead of movie details
    if(error.show){
        //when err - show BACK BTN - no refresh
        //h1{error.msg} - displays err msg from API
        return <div className="page-error">
            <h1>{error.msg}</h1>
            <Link to="/" className="btn">back</Link>
        </div>
    }
    console.log("Movie is movie komponento: ", movie)
    //takes properties from movie object-take from API and rename - instead of movie.Title > {Title}
    const {Poster: poster, Title: title, Plot:plot, Year: year} = movie;
    //render 1movie page
    return (
        <section className="single-movie">
            <img src={poster} alt={title}/>
            <p>{plot}</p>
            <h4>{year}</h4>
            <Link to="/" className="btn">back</Link>
        </section>
    )
}

export default Movie

//CLICK movie card > URL change to /movies/tt124 > Movie.jsx loads > useParams() reads ID > getMovie("&i=tt123") runs fetches details > API returns 1movie > Movie.jsx RENDERS details
// Movie.jsx reads movie ID from URL using useParams, fetches movie details with a custom hook, and renders loading, error, or movie details accordingly.