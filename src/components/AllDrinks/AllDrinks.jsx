import React from "react";
import PopDrinks from "./PopDrinks";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import FoundDrinks from "./FoundDrinks";

import style from "./AllDrinks.module.css";

export default function AllDrinks() {
    return (
        <section className={style.drinksPop}>
            <Router>
                <h2 className={style.titleDrinks}>All Drinks</h2>
                <div className={style.divDrinks}>
                    <div className={style.divNavDrinks}>
                        <NavLink to="/drinks/founddrinks" className={style.divButton}><button>Found Drinks</button></NavLink>
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


