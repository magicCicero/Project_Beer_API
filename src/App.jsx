import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import RandomDetails from "./pages/RandomDetails/RandomDetails";
import { useState } from "react";
// wir importieren den Context

import { StartPageContext } from "./Context/Context";

function App() {
  // erstellen ein State
  const [siteLoaded, setSiteLoaded] = useState("-on");

  return (
    <>
      <StartPageContext.Provider value={{ siteLoaded, setSiteLoaded }}>
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
      </StartPageContext.Provider>
    </>
  );
}

export default App;
