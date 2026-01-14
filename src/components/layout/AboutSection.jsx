// <section id="about">
import aboutImg from "../../img/aboutUs.png";

const AboutSection =()=> {
    return(
        <section id="about" className="about-section my-5" aria-label="About us section">
            <div className="container">
                <div className="about-bg rounded-4 position-relative overflow-hidden" style={{ backgroundImage: `url(${aboutImg})` }}>
                    {/* left small label bubble */}
                    <div className="about-badge position-absolute">50+ Quick Food Recipes <br /> That Easy To Do!</div>

                    {/* right card */}
                    <div className="about-card bg-white shadow-sm rounded-4 p-4 p-md-5">
                        <h2 className="fw-bold mb-2">About Us</h2>
                        <p className="text-secondary mb-4">
                            Our recipes are the heart and soul of our culinary community, and they reflect our commitment to providing you with memorable and delightful dining experiences.
                        </p>
                        <button type="button" className="btn btn-brand px-4" aria-label="Learn more about us">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutSection;