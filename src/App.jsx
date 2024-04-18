import "./App.css";
import Home from "./pages/Home";
import Navbar from "./component/Header";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
     <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
   </div>
  );
}

export default App;
