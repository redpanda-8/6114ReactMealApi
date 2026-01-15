import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchMeal from "../../services/fetchMeal";

const FeaturedMeals = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        const load = async () => {
        try {
            setLoading(true);
            setErrMsg("");

            const responses = await Promise.all(
            Array.from({ length: 6 }, () => fetchMeal("/random.php"))
            );
            // responses = [ [meal1], [meal2], ... ]
            const flat = responses.flat().filter(Boolean);
            // unique by idMeal (kad nepasikartotu)
            const map = new Map();
            flat.forEach((m) => map.set(m.idMeal, m));
            setMeals(Array.from(map.values()).slice(0, 6));
        } catch (e) {
            setErrMsg("Failed to load featured meals");
        } finally {
            setLoading(false);
        }
        };

        load();
    }, []);

    if (loading) return <div className="loading"></div>;
    if (errMsg) return <div className="container text-danger">{errMsg}</div>;
    if (meals.length === 0) return null;

    return (
        <section className="container pb-5">
        <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-3">
            <div>
                <h2 className="fw-bold mb-1">Discover, Create, Share</h2>
                <p className="text-secondary mb-0">Check our most popular recipes of this week</p>
            </div>
            <Link to="/search?q=chicken&type=name" className="btn btn-brand" aria-label="See all recipes">See All</Link>
        </div>

        <div className="row g-4">
            {meals.map((meal) => (
            <div key={meal.idMeal} className="col-12 col-sm-6 col-lg-4">
                <Link to={`/meal/${meal.idMeal}`} className="text-decoration-none fw-bold">
                <article className="card h-100 shadow-sm rounded-4 overflow-hidden">
                    <img src={meal.strMealThumb} className="card-img" alt={meal.strMeal} />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{meal.strMeal}</h5>
                        <p className="card-text text-secondary mb-0">
                        {meal.strCategory} • {meal.strArea}
                        </p>
                    </div>
                </article>
                </Link>
            </div>
            ))}
        </div>
        </section>
    );
};
export default FeaturedMeals;