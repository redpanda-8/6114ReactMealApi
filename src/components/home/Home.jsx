// import Search from "../search/Search.jsx";
// import Movies from "../movies/Movies.jsx";
// const Home = () => {
//     return (
//         <main>
//             <Search/>
//             <Movies/>
//         </main>
//     )
// } export default Home;

import Search from "../search/Search.jsx";
import Categories from "../categories/Categories.jsx";

const Home = ()=>{
    return(
        <main className="container">
            <header className="hero">
                <div className="hero-left">
                    <h1>Cooking Made Fun and Easy</h1>
                    <p>Search meals by name, ingredient, category, or area.</p>
                    <Search/>
                </div>
            </header>

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