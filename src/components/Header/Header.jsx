import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className={style.divHeader}>
            <div>
                <img src="./footer-lemon.png" alt="headerimg" />
            </div>
            <nav className={style.navHeader}>
                <Link to="/alldrinks/drinkspop">
                    <h1>Found Drinks</h1>
                </Link>
                <Link to="/aboutus">
                    <h1>About Us</h1>
                </Link>
                <Link to="/">
                    <div>
                        <h1 className={style.goodDrinks}>Lemon Drinks</h1>
                    </div>
                </Link>
                <Link to="/ourtime">
                    <h1>Our Time</h1>
                </Link>
                <Link to="/Contact">
                    <h1>Contact</h1>
                </Link>
            </nav>
        </header>

    )
}