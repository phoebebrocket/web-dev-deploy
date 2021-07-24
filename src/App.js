import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
// import { v4 as uuid } from "uuid";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Flavours from "./pages/Flavours";
import Shop from "./pages/Shop";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <>
  

  <Header />

    <Switch>
    
    <Route exact path="/">
      <Home />
    </Route>
    
    <Route exact path="/about">
      <About />
    </Route>

    <Route exact path="/flavours">
      <Flavours />
    </Route>

    <Route exact path="/shop">
      <Shop />
    </Route>

    </Switch>
    <Footer/>
    
  </>
  );
}

export default App;
