import React from "react";
import PopDrinks from "./PopDrinks";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import FoundDrinks from "./FoundDrinks";

import style from "./AllDrinks.module.css";

export default function AllDrinks() {
    return (
        <section className={style.drinksPop}>
            <Router>
                <h3 className={style.titleDrinks}> <NavLink to="/alldrinks/popdrinks" className={style.titleDrinks}>Drinks</NavLink></h3>
                <div className={style.divDrinks}>
                    <div className={style.divNavDrinks}>
                        <NavLink to="/drinks/popdrinks"><button>Popular Drinks</button></NavLink>
                        <NavLink to="/drinks/founddrinks"><button>Found Drinks</button></NavLink>
                    </div>
                    <div className={style.divContentDrinks}>
                        <Switch>
                            <Route path="/alldrinks/popdrinks">
                                <PopDrinks />
                            </Route>
                            <Route path="/drinks/founddrinks">
                                <FoundDrinks />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </section>
    )
}


