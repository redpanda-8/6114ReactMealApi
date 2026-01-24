// DETAILS PAGE - vieno meal detaliu puslapis
// Skaito :id is URL per useParams(). Kviecia endpoint lookup.php?i=ID. Rodo viena didele detale: ingredientai, instrukcijos, tags ir t.t.

//useParams() pasiima id,  kviečia lookup.php?i=...,  rodo ingredientus + kiekius + instructions + tags
import { useParams, Link } from "react-router-dom";
import getMeal from "../../services/getMeal.js";
import BackButton from "../search/BackButton.jsx";

const Meal = () => {
    const { id } = useParams();
    const { isLoading, error, data: mealData } = getMeal(`/lookup.php?i=${id}`);
    //for spinner - show kol krauna
    if (isLoading) return <div className="loading"></div>;

    if (error.show) {
        return (
        <main className="container">
          <div className="page-error">
            <h1>{error.msg}</h1>
            <BackButton to="/" />
          </div>
        </main>
        );
    }

    const meal = mealData?.[0];
    if (!meal) {
        return (
        <main className="container">
            <p className="no-results">No meal found.</p>
            <BackButton to="/" />
        </main>
        );
    }
    // ingredientai 1..20
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ing = meal[`strIngredient${i}`];
        const meas = meal[`strMeasure${i}`];

        if (ing && ing.trim()) {
        ingredients.push(`${meas ? meas.trim() : ""} ${ing.trim()}`.trim());
        }
    }

    const tags = meal.strTags ? meal.strTags.split(",").map((t) => t.trim()) : [];

    return (
        <main className="container">
           <BackButton to="/search" />

            <section className="row g-4 align-items-start meal-details">
                <div className="col-12 col-lg-5 col-xl-4">
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="img-fluid rounded-4 shadow-sm meal-img" />
                </div>

                <div className="col-12 col-lg-7 col-xl-8">
                    <h1 className="display-6 fw-bold mb-2">{meal.strMeal}</h1>
                    <p className="text-secondary mb-3">
                        <span className="fw-semibold">{meal.strCategory}</span> •{" "}
                        <span className="fw-semibold">{meal.strArea}</span>
                    </p>

                    {tags.length > 0 && (
                        <div className="d-flex flex-wrap gap-2 mb-4">
                        {tags.map((t) => (
                            <span className="badge rounded-pill text-bg-light border" key={t}> {t} </span>
                        ))}
                        </div>
                    )}

                    <div className="row g-4">
                        <div className="col-12 col-xl-5">
                            <h2 className="h5 fw-bold mb-2">Ingredients</h2>
                            <ul className="ps-3 mb-0">
                                {ingredients.map((x, idx) => ( 
                                    <li key={idx} className="mb-1"> {x} </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-12 col-xl-7">
                            <h2 className="h5 fw-bold mb-3">Instructions</h2>
                            <p className="meal-instructions mb-5"> {meal.strInstructions} </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Meal;