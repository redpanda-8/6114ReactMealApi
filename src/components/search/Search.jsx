// atnaujina context query/type, o paspaudus submit – nuveda į /search?q=...&type=
import { useNavigate } from "react-router-dom";
import {useGlobalContext} from "../../context.jsx";

const Search =()=>{
    const navigate = useNavigate();
    const {query, setQuery, searchType, setSearchType, error}=useGlobalContext();

    const handleSubmit=(e)=>{
        e.preventDefault();
        //if(!query.trim()) return;
        const text = query.trim();
        if(!text) return;
        //navigate(`/search?q=${encodeURIComponent(query.trim())}&type=${searchType}`);
        const finalQuery = searchType === "firstLetter" ? text[0] : text;
        navigate(`/search?q=${encodeURIComponent(finalQuery)}&type=${searchType}`);
    };
    return(
        <form className="search-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="searchInput">Search meals</label>

            <div className="search-row">
                <input
                 id="searchInput"
                 type="text"
                 className="form-input"
                 placeholder="Search meals..."
                 value={query}
                 onChange={(e) => setQuery(e.target.value)}
                />
            
                <label className="sr-only" htmlFor="searchType">Search type</label>
                <select 
                  id="searchType"
                  className="form-select"
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                >
                    <option value="name">Name</option>
                    <option value="ingredient">Ingredient</option>
                    <option value="category">Category</option>
                    <option value="area">Area</option>
                    <option value="firstLetter">First letter</option>
                </select>

                <button className="btn" type="submit" aria-label="Search meals">Search</button>
                <button className="btn btn-ghost" type="submit" 
                  onClick={() => navigate("/random")} 
                  aria-label="Open random meal">Random meal</button>
                {/* <a className="btn btn-ghost" href="/random">Random meal</a> */}
            </div>
            {error.show && <div className="error">{error.msg}</div>}
        </form>
    );
};
export default Search;