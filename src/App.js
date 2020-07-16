import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleMeal from "./pages/SingleMeal";
//
import Navbar from "./components/Navbar";

// app component
export default function App() {
  return (
    <section>
      <Router>
        <Navbar />

        {/* Switch case for routing */}
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/meals/:id">
              <SingleMeal />
            </Route>

            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
    </section>
  );
}
