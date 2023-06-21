import React from "react";
import Navbar from "./Components/NavBar";
import ProductCards from "./Components/Products";
import "./app.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CartPage from "./Components/CartPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<ProductCards />}/>
        <Route path="/cart" element={<CartPage />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
