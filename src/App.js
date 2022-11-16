import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  About,
  Home,
  SingleProduct,
  Products,
  PrivateRoute,
  Cart,
  Error,
  Checkout,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/products/:id' element={<SingleProduct />} />
        <Route exact path='/privateRoute' element={<PrivateRoute />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/*' element={<Error />} />
        <Route exact path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
