// <Search /> forma su dropdown
// <Categories /> greiti filter pill
// <Meals /> rezultatų korteles

import Search from "./Search.jsx";
import Categories from "../categories/Categories.jsx";
import Meals from "../meals/Meals.jsx";
import { Link } from "react-router-dom";

const SearchResults =()=> {
    return (
        <main className="container py-4">
            <Link to="/" className="btn"> 🔙Back</Link>
            <h1 className="fw-bold mb-3">Search Results</h1>
            <Search />

            <section className="mt-4">
                <div className="d-flex align-items-end justify-content-between flex-wrap gap-2 mb-2">
                    <div>
                        <h2 className="h5 fw-bold mb-0">Categories</h2>
                        <p className="text-secondary mb-0">Quick filter by category</p>
                    </div>
                </div>
                <Categories />
            </section>

            {/* Results grid */}
            <section className="mt-4">
                <Meals />
            </section>
        </main>
    );
};
export default SearchResults;