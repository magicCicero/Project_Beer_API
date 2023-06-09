import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import RandomDetails from "./pages/RandomDetails/RandomDetails";

function App() {
  return (
    <>
      <BrowserRouter
        basename={import.meta.env.DEV ? "/" : "/Project_Beer_API/"}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/product/:beerid" element={<ProductDetails />} />
          <Route path="/randomproduct" element={<RandomDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
