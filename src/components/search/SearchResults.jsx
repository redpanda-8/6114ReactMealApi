// <Search /> forma su dropdown
// <Categories /> greiti filter pill
// <Meals /> rezultatų korteles

import Search from "./Search.jsx";
import Categories from "../categories/Categories.jsx";
import Meals from "../meals/Meals.jsx";
import BackButton from "./BackButton.jsx";

import { Link } from "react-router-dom";

const SearchResults =()=> {
    return (
        <main className="container py-4">
            <BackButton to="/" />
            <h1 className="fw-bold mb-3">Search Results</h1>

            <section className="search-filters">
                <Search />
                <div className="categories-wrap">
                    <div className="categories-head">
                        <h3 className="mb-0">Categories</h3>
                        <p className="text-muted mb-0">Quick filter by category</p>
                    </div>
                    <Categories />
                </div>
            </section>
            {/* Results grid */}
            <section className="mt-4">
                <Meals />
            </section>
        </main>
    );
};
export default SearchResults;