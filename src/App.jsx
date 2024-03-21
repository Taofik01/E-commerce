import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/Cart" component={<Cart />} />
        </Routes>
    </>
  );
}

export default App;
