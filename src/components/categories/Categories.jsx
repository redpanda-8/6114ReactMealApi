//reikalinga kad tureti sarasa
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";

const Categories =()=> {
    const navigate = useNavigate();
    const{categories, isLoadingCategories, categoriesError, setQuery, setSearchType }=useGlobalContext();

    if(isLoadingCategories) return <div className="loading"></div>;
    if (categoriesError.show) return <div className="error">{categoriesError.msg}</div>;

    return(
        <nav className="categories" aria-label="Meal categories">
            {categories?.map((c) => (
                <button
                 key={c.idCategory}
                 className="cat-pill"
                 onClick={() =>{
                    setSearchType("category");
                    setQuery(c.strCategory);
                    navigate(`/search?q=${encodeURIComponent(c.strCategory)}&type=category`);
                 }}
                >
                    {c.strCategory}
                </button>
            ))}
        </nav>
    );
};
export default Categories;