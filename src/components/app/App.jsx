import {Routes, Route} from "react-router-dom";
import Home from "../home/Home.jsx";
import Meals from "../meals/Meals.jsx";
import Meal from "../meal/Meal.jsx";
import Random from "../random/Random.jsx";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search" element={<Meals/>} />
      <Route path="/meal/:id" element={<Meal/>} />
      <Route path="/random" element={<Random/>} />
    </Routes>
  );
}
export default App;