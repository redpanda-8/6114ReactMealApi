//newsletter: label + input htmlFor/id
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer pt-4 pb-5" aria-label="Site footer">
            <div className="container">
                <div className="row g-4 align-items-start">
                    <div className="col-12 col-lg-3">
                        <Link to="/" className="fw-bold fs-3 text-decoration-none txtgreen">🍕Recipedia</Link>
                    </div>

                    <nav className="col-6 col-md-3 col-lg-2" aria-label="Footer menu">
                        <h4 className="fw-bold mb-3">Menu</h4>
                        <ul className="list-unstyled footer-list">
                        <li><Link to="/" className="footer-link  text-decoration-none">Home</Link></li>
                        <li><Link to="/search?q=chicken&type=name" className="footer-link  text-decoration-none">Recipe</Link></li>
                        <li><a href="#community" className="footer-link  text-decoration-none">Community</a></li>
                        <li><a href="#about" className="footer-link  text-decoration-none">About Us</a></li>
                        </ul>
                    </nav>

                    <nav className="col-6 col-md-3 col-lg-2 " aria-label="Footer categories">
                        <h4 className="fw-bold mb-3">Categories</h4>
                        <ul className="list-unstyled footer-list">
                        <li><Link to="/search?q=Breakfast&type=category" className="footer-link  text-decoration-none">Breakfast</Link></li>
                        <li><Link to="/search?q=Chicken&type=category" className="footer-link  text-decoration-none">Lunch</Link></li>
                        <li><Link to="/search?q=Dessert&type=category" className="footer-link  text-decoration-none">Dinner</Link></li>
                        <li><Link to="/search?q=Seafood&type=category" className="footer-link  text-decoration-none">Dessert</Link></li>
                        <li><Link to="/search?q=Vegan&type=category" className="footer-link  text-decoration-none">Drink</Link></li>
                        </ul>
                    </nav>

                    <nav className="col-6 col-md-3 col-lg-2" aria-label="Footer social links">
                        <h4 className="fw-bold mb-3">Social</h4>
                        <ul className="list-unstyled footer-list">
                        <li><a className="footer-link  text-decoration-none" href="#" aria-label="Instagram">Instagram</a></li>
                        <li><a className="footer-link  text-decoration-none" href="#" aria-label="Twitter">Twitter</a></li>
                        <li><a className="footer-link  text-decoration-none" href="#" aria-label="Youtube">Youtube</a></li>
                        <li><a className="footer-link  text-decoration-none" href="#" aria-label="Facebook">Facebook</a></li>
                        </ul>
                    </nav>

                    <div className="col-12 col-md-9 col-lg-3">
                        <h4 className="fw-bold mb-3">Sign up for our newsletter</h4>

                        <form className="d-flex gap-2 flex-wrap" aria-label="Newsletter form">
                            <label className="sr-only" htmlFor="newsletterEmail">Your Email Address</label>
                            <input
                                id="newsletterEmail"
                                type="email"
                                className="form-control footer-input"
                                placeholder="Your Email Address"
                                autoComplete="email"
                            />
                            <button className="btn btn-brand" type="submit" aria-label="Submit newsletter email">Submit</button>
                        </form>
                    </div>
                </div>
                <hr className="my-4" />
                <p className="text-secondary small mb-0">
                    © {new Date().getFullYear()} Recipedia. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
export default Footer;