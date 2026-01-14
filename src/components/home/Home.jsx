import Search from "../search/Search.jsx";
import Categories from "../categories/Categories.jsx";
import Header from "../layout/Header.jsx";
import FeaturedMeals from "../layout/FeaturedMeals.jsx";
import AboutSection from "../layout/AboutSection.jsx";
import CommunitySection from "../layout/CommunitySection.jsx";
import DownloadCTA from "../layout/DownloadCTA.jsx";
import Footer from "../layout/Footer.jsx";
// PAGE LAYOUT SUDELIOTOJAS :)
const Home = ()=>{
    return(
        <main>
            <Header />
            <FeaturedMeals/>
            <AboutSection/>
            <CommunitySection/>
            <DownloadCTA/>
            <Footer/>
        </main>
    );
};

export default Home;