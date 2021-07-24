import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

    <Router basename={public.env.PUBLIC_URL}>
  

        <Header />

        <Switch>
        
          <Route exact path="/home">
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
    </Router>
  </>
  );
}

export default App;
