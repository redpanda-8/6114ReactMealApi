//small galerija po header - sekcija:
// title + p + button “See All”
// random meals (6 kortels)
// kiekviena kortele kaip <article> ir su <Link> i /meal/:id

import { Link } from "react-router-dom";
import getMeal from "../../services/getMeal";

const FeaturedMeals =()=> {
    const {isLoading, error, data: meals} = getMeal("/random.php");

    //kad gauti 6 random, galima: render 6 kartus ta pati endpoint-butu blogai. tdl kompromisas: 1 random + rodyt kaip "Today’s pick" (1 kortele)
    if(isLoading) return <div className="loading"></div>;
    if(error.show) return <div className="container text-danger">{error.msg}</div>;

    const meal = meals?.[0];
    if(!meal) return null;

    return(
        <section className="container pb-5">
            <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-3">
                <div>
                    <h2 className="fw-bold mb-1">Discover, Create, Share</h2>
                    <p className="text-secondary mb-0">Check our most popular recipes of this week</p>
                </div>
                <Link to="/search?q=chicken&type=name" className="btn btn-warning" aria-label="See all recipes"> See All </Link>
            </div>

            <div className="row g-4">
                <div className="col-12 col-sm-6 col-lg-4">
                    <Link to={`/meal/${meal.idMeal}`} className="text-decoration-none">
                        <article className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                            <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal}  />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{meal.strMeal}</h5>
                                <p className="card-text text-secondary mb-0">
                                    {meal.strCategory} • {meal.strArea}
                                </p>
                            </div>
                        </article>
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default FeaturedMeals;