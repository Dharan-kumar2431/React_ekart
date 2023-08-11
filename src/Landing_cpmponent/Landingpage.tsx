import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navebar from "../Navebar_component/Navebar";
import Home from "../Home_component/Home";

function Landingpage() {
  return (
    <div>
      <Navebar />
      <Routes>
        <Route index Component={Home} />
      </Routes>
    </div>
  );
}

export default Landingpage;
