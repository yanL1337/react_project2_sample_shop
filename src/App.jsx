import "./App.scss";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopItem from "./pages/ShopItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-item/:id" element={<ShopItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
