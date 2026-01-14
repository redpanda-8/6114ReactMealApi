import { Link } from "react-router-dom";
import getMeal from "../../services/getMeal.js";

const Random = () => {
    const { isLoading, error, data } = getMeal("/random.php");
    if (isLoading) return <div className="loading"></div>;

    if (error.show) {
        return (
        <main className="container">
            <div className="error">{error.msg}</div>
            <Link to="/" className="btn">back</Link>
        </main>
        );
    }

    const meal = data?.[0];
    if (!meal) return <main className="container"><p className="no-results">No meal found.</p></main>;

    return (
        <main className="container">
            <h2 className="page-title">Random Meal</h2>

            <article className="card card-random">
                <img className="card-img" src={meal.strMealThumb} alt={meal.strMeal} />
                <div className="card-body">
                <h3 className="card-title">{meal.strMeal}</h3>
                <p className="card-sub">{meal.strCategory} • {meal.strArea}</p>
                <Link className="btn" to={`/meal/${meal.idMeal}`}>Open details</Link>
                <Link className="btn btn-ghost" to="/">Home</Link>
                </div>
            </article>
        </main>
    );
};
export default Random;