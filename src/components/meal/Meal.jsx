//useParams() pasiima id,  kviečia lookup.php?i=...,  rodo ingredientus + kiekius + instructions + tags
import { useParams, Link } from "react-router-dom";
import getMeal from "../../services/getMeal.js";

const Meal = () => {
    const { id } = useParams();
    const { isLoading, error, data: mealData } = getMeal(`/lookup.php?i=${id}`);

    if (isLoading) return <div className="loading"></div>;

    if (error.show) {
        return (
        <main className="container">
          <div className="page-error">
            <h1>{error.msg}</h1>
            <Link to="/" className="btn">back</Link>
          </div>
        </main>
        );
    }

    const meal = mealData?.[0];
    if (!meal) {
        return (
        <main className="container">
            <p className="no-results">No meal found.</p>
            <Link to="/" className="btn">back</Link>
        </main>
        );
    }

    // ingredientai 1..20
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ing = meal[`strIngredient${i}`];
        const meas = meal[`strMeasure${i}`];
        //kdl puse nerodo :( pavargau -_-
        if (ing && ing.trim()) {
        ingredients.push(`${meas ? meas.trim() : ""} ${ing.trim()}`.trim());
        }
    }

    const tags = meal.strTags ? meal.strTags.split(",").map((t) => t.trim()) : [];

    return (
        <main className="container">
            <Link to="/search" className="btn btn-ghost">← back to results</Link>

            <section className="meal-details">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-img" />

                <div className="meal-info">
                    <h1>{meal.strMeal}</h1>
                    <p className="meta">
                    <span>{meal.strCategory}</span> • <span>{meal.strArea}</span>
                    </p>

                    {tags.length > 0 && (
                        <div className="tags">
                        {tags.map((t) => (
                            <span className="tag" key={t}>{t}</span>
                        ))}
                        </div>
                    )}

                    <h2>Ingredients</h2>
                    <ul className="ingredients">
                        {ingredients.map((x, idx) => (
                        <li key={idx}>{x}</li>
                        ))}
                    </ul>

                    <h2>Instructions</h2>
                    <p className="instructions">{meal.strInstructions}</p>
                </div>
            </section>
        </main>
    );
};

export default Meal;
