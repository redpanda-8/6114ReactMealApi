// <section id="community">
import img1 from "../../img/commu1.png";
import img2 from "../../img/commu2.png";
import img3 from "../../img/commu3.png";
import img4 from "../../img/commu4.png";

const posts = [
    { id: 1, title: "Spaghetti Bolognesse", author: "Lady Rudy", rating: 5, 
        text:"I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home.",
        img: img1, likes: 2,
    },
    { id: 2, title: "Roasted Chicken", author: "Emily Rose", rating: 5, text:
        "I've always been a bit hesitant to roast a whole chicken, fearing it might be too complicated, but your recipe changed that for me. The instructions were so clear and easy to follow.",
        img: img2, likes: 5,
    },
    { id: 3, title: "Vegetable Pot Pie", author: "Susan H", rating: 5, text:
        "I've always been a fan of hearty comfort food, and the 'Ultimate Vegetable Pot Pie' recipe on this platform completely exceeded my expectations.",
        img: img3, likes: 3,
    },
    { id: 4, title: "Fresh Garden Salad", author: "Lilac Laura", rating: 5, text:
        "I've always considered myself a salad enthusiast, and this salad recipe is nothing short of a culinary masterpiece and has taken my love for greens to a whole new level.",
        img: img4, likes: 1,
    },
];

const Stars = ({ count = 5 }) => {
    return <div className="community-stars" aria-label={`${count} star rating`}>{"⭐️⭐️⭐️⭐️⭐️"}</div>;
};
const CommunitySection =()=> {
    return (
    <section id="community" className="my-5" aria-label="Community posts">
        <div className="container">
            <h2 className="text-center fw-bold mb-4">🥨From Our Community🥨</h2>

            <div className="row g-5">
                {posts.map((p) => (
                    <div className="col-12 col-lg-6" key={p.id}>
                        <article className="community-card bg-white rounded-4 shadow-sm p-4 h-100">
                            <div className="d-flex align-items-center gap-3 mb-2">
                                
                                <div className="community-avatar" aria-hidden="true"></div>
                                <div>
                                    <h3 className="h4 fw-bold mb-0">{p.title}</h3>
                                    <p className="text-secondary small mb-0">{p.author}</p>
                                </div>
                            </div>

                            <Stars count={p.rating} />
                            <p className="text-secondary community-text mt-2"> “{p.text}” </p>
                            <img src={p.img} alt={p.title} className="community-img rounded-4 mt-2" />

                            <div className="d-flex align-items-center gap-3 mt-4">
                                <button type="button" className="btn btn-light fw-bold" aria-label={`Like ${p.title}`}>
                                    🧡 {p.likes}
                                </button>
                                <button type="button" className="btn btn-light fw-bold" aria-label={`Share ${p.title}`}>
                                    🍒 Share
                                </button>
                            </div>
                        </article>
                    </div>
                ))}
            </div>

            {/* Optional small pagination row */}
            <div className="community-pagination d-flex align-items-center justify-content-center gap-3 mt-4">
                <span className="community-line"></span>
                <button className="btn btn-light btn-sm" aria-label="Previous">‹ </button>
                <button className="btn btn-light btn-sm" aria-label="Next"> ›</button>
            </div>
        </div>
    </section>
  );
};
export default CommunitySection;