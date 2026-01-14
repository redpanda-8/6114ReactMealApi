import {useGlobalContext} from "../../context.jsx";
import {Link} from "react-router-dom";
//Link is like an <a> tag, but for React Router - changes url without refreshing page
//import useGlobalContext - hook that reads Context data-component connects to global state
const url='https://www.mountainmotorvehicles.co.uk/wp-content/uploads/2024/05/No-image-available-2-300x300.jpg'
//Movies.jsx reads from useGlobalContext(), checks loading/error, then maps movies into <Link> cards with poster fallback
const Movies = ()=>{
    //GET DATA FROM CONTEXT.JSX - pull out values:movies-array of mvie object, isload-boolean(spinner or not), error-{show:true/false,msg:""}
    //MOVIES DOESNT FETCH DATA ITSELF - it READS WHAT CONTEXT FETCHED
    const {movies, isLoading} = useGlobalContext();
    //the rest of component wont run until load is done
    //if (error.show) {return <h2 className="error">{error.msg}</h2>;} - if API RTRND ERR - return err msg instead of grid
    if(isLoading){
        return <div className="loading"></div>;
    }
    return(
        //start jsx that shows movies - is a container for grid/list
        //.. LOOP - map() creates new jsx element for every movie,if movies is null.undef-wont crash cause movies?.map
        //.. const{imdbID,Title,Poster,Year}=movie=taking fields from movie object OMDb properties
        //.. evry movie is cliclable link - <Link to={`/movies/${imdbID}`} key={imdbID} className="movie">
        //.. key={imdbID} is required byReact when rendering lists
        <section className="movies">
            {movies?.map((movie)=>{
                const {imdbID: id, Poster: poster, Title: title, Year: year} = movie;
               return (
                   <Link to={`/movies/${id}`} key={id} className = "movie">
                   <article>
                       <img src={poster === 'N/A'? url:poster} alt={title}/>
                       <div className="movie-info">
                           <h4 className="title">{title}</h4>
                           <p>{year}</p>
                       </div>

                   </article>
                   </Link>
                   )
            })}
        </section>
    )
}
export default Movies

//How Movies.jsx gets movies from context:
//context.jsx have movies inside Provider value: value={{isLoading,error,movies,query,setQuery}}
// In Movies.jsx call: const{movies,isLoading,error}=useGlobalContext();
// That pulls the same shared values from Context — no props needed

// Context fetches once and shares data to multiple components
// Movies.jsx becomes a "display component" - IT JUST RENDERS THE LIST