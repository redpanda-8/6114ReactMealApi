import {Routes, Route} from "react-router-dom";
import Home from "../home/Home.jsx";
import Meals from "../meals/Meals.jsx";
import Meal from "../meal/Meal.jsx";
import SearchResults from "../search/SearchResults.jsx";
import Random from "../random/Random.jsx";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search" element={<SearchResults/>} />
      <Route path="/meal/:id" element={<Meal/>} />
      <Route path="/random" element={<Random/>} />
    </Routes>
  );
}
export default App;

// path="/search" element={<Meals/>} - paima params is meals/Meals.jsx  10-12 eilutes
// path="/meal/:id" element={<Meal/>} - paima id is meal/Meal.jsx - const { id } = useParams();
// path="/random" element={<Random/>} - is Search.jsx per navigate("/random")/<Link to="/random">Random</Link>