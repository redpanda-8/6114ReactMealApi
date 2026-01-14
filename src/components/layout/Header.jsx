//header (nav + hero)
{/* <header>
<nav> (logo + menu + icons)
<section> hero (text + button + image area)
po header:
<section> “Discover, Create, Share”
<header> sekcijos (h2, p, see all)
<div> grid su <article> kortelėm */}

// Accessibility
// nav link’ai <a> arba <Link>
// search icon: <button aria-label="Search">
// user icon: <button aria-label="User profile">
// “Explore Recipes” mygtukas: aiskus txt
// korteles: <article> ir visa kortele clickable su <Link></Link>

import {Link, NavLink} from "react-router-dom";
import heroImg from "../../img/heromeal.png";

const Header =()=> {
    return(
        <header className="py-4">
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container">
                    <Link to="/" className="navbar-brand fw-bold">Recipedia</Link>
                    <div className="d-flex gap-5">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/search?q=chicken&type=name" className="nav-link">Recipe</NavLink>
                        <a className="nav-link" href="#community">Community</a>
                        <a className="nav-link" href="#about">About Us</a>
                    </div>
                    
                    <div className="d-flex gap-2 ms-5">
                        <Link className="btn btn-light">🔍</Link>
                        <button className="btn btn-light">👤</button>
                    </div>
                </div>
            </nav>

            <section className="container pt-5 pb-4">
                <div className="row align-items-center g-4">
                    <div className="col-12 col-lg-6">
                        <h1 className="display-4 fw-bold">Cooking Made Fun and Easy: Unleash Your Inner Chef</h1>
                        <p className="text-secondary mt-3">Discover more than 10,000 recipes in your hand with the best recipe. Help you to find the easiest way to cook.</p>
                        <div className="d-flex gap-3 mt-4">
                            <Link to="/search?q=chicken&type=name" className="btn btn-brand" aria-label="Explore recipes">Explore Recipes</Link>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="hero-image-wrapper position-relative">
                            <img src={heroImg} alt="Healthy meal with avocado and egg" className="hero-img"/>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};
export default Header;