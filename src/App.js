import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutUs from "./components/AboutUs/AboutUs";
import AllDrinks from "./components/AllDrinks/AllDrinks";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GoodDrinks from "./components/GoodDrinks/GoodDrinks";
import Header from "./components/Header/Header";
import OurTime from "./components/OurTime/OurTime";
import PreLoader from "./components/PreLoader/PreLoader";

import "./App.css";
import "./reset.css";

function App() {
  const [preLoader, setPreLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false);
    }, 1);
  }, []);

  return preLoader ? (
    <PreLoader />
  ) : (
    <div className="divApp">
      <Router>
        <Header />
        <div className="divAreas">
          <Switch>
            <Route path="/allDrinks">
              <AllDrinks />
            </Route>
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            <Route exact path="/">
              <GoodDrinks />
            </Route>
            <Route path="/OurTime">
              <OurTime />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
