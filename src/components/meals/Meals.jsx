//Search results puslapis
//skaito query params ?q=...&type=, kviečia context setQuery / setSearchType, rodo korteles(/meal:null), loading/err
//ieskant pagal ingredient/category/area, MEALAPI return tik: idMeal, strMeal, strMealThumb
// TDL NEBUS strCategory ir strArea, TDL Meals.jsx - vietoj info
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "../../context.jsx";
//Routes /search element={<Meals>} mechanizmas ?q=chicken&type=name
const Meals =()=> {
    const [params] =useSearchParams();
    const q =params.get("q") || "";
    const type =params.get("type") || "name";

    const{meals, isLoadingMeals, mealsError, setQuery, setSearchType} =useGlobalContext();
    useEffect(()=>{
        setQuery(q);
        setSearchType(type);
    }, [q, type]);
    //for spinner - show kol laukiam api
    if(isLoadingMeals) return <div className="loading"></div>;
    
    if(mealsError.show){
        return(
            <main className="container">
              <h2 className="page-title">Search Results</h2>
              <div className="error">{mealsError.msg}</div>
            </main>
        );
    }
    if(!meals || meals.length === 0){
        return(
            <main className="container">
              <h2 className="page-title">Search Results</h2>
              <p className="no-results">No meals found.</p>
            </main>
        );
    }
    
    return(
        <main className="container">
            <h2 className="page-title">Search Results</h2>
            <section className="grid" aria-label="Meals results">
                {meals.map((m) => {
                  const id = m.idMeal;
                  const title = m.strMeal;
                  const img = m.strMealThumb;

                  // kai ateina is filter.php — no category/area, tai “info” kaip empty
                  const info = [m.strCategory, m.strArea].filter(Boolean).join("...");
                  return(
                    <Link to={`/meal/${id}`} key={id} className="card-link">
                        <article className="card">
                            <img src={img} alt={title} className="card-img" />
                            <div className="card-body">
                              <h3 className="card-title">{title}</h3>
                              <p className="card-sub">{info || "-"}</p>
                            </div>
                        </article>
                    </Link>
                  );
                })}
            </section>
        </main>
    );
};
export default Meals;