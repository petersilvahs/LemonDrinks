import React from "react";
import style from "./Modal.module.css";

export default function Modal({ openDrinks, closeDrinks }) {
    console.log(openDrinks);
    function findIng(drinks) {
        const drinksIng = Objetic.entries(drinks);
        return drinksIng.filter(([key, value]) => key.startDrinks("allIngredients") && value && value.trim()).map(([key, value]) => value).join(",")
    };
    return (
        <div id="modal" className={style.modal} onClick={(a) => {
            if (a.target.className === style.modal) closeDrinks()
        }}>
            <div className={style.modal_content}>
                <div className={style.modal_header}>
                    <p class="drinkNome">{openDrinks.strDrink}</p>
                    <button className={style.close}
                        onClick={() => {
                            closeDrinks()
                        }}>&times;</button>
                </div>
                <div className={style.modal_body}>
                    <img alt="Foto Drink" src={openDrinks.strDrinkThumb} className={styles.modalImg} />
                    <p>Categoria: {openDrinks.strCategory}</p>
                    <p>Copo: {openDrinks.strGlass}</p>
                    <p>Ingredientes: {`${findIng(openDrinks)}`}</p>
                </div>
                <div className={style.modal_footer}>
                    <p>Instruções: {openDrinks.strInstructions}</p>
                </div>
            </div>
        </div>
    )
}



