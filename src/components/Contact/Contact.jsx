import React from "react";
import style from "./Contact.module.css";

export default function Contact() {
    return (
        <section className={style.secContact}>
            <h2>Talk To Us</h2>
            <div className={style.divContact}>
                <img src="./call.png" alt="get in touch"></img>
            
            <form>
                <label>Name: </label>
                <input placeholder="insert name" required></input>
                <label>E-mail: </label>
                <input placeholder="insert email" required></input>
                <label>Message: </label>
                <textarea placeholder="insert message" className={style.sendMessege} required/>
                <button>Submit</button>
            </form>
            </div>
        </section>
    )
}
