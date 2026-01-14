import Search from "../search/Search.jsx";
import Categories from "../categories/Categories.jsx";
import Header from "../layout/Header.jsx";
import FeaturedMeals from "../layout/FeaturedMeals.jsx";
// PAGE LAYOUT SUDELIOTOJAS :)
const Home = ()=>{
    return(
        <main>
            <Header />
            <FeaturedMeals/>

            <section className="section">
                <div className="section-head">
                    <h2>Categories</h2>
                    <p>Quick filter by category</p>
                </div>
                <Categories/>
            </section>
        </main>
    );
};

export default Home;