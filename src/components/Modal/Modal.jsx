import React from 'react';

import styles from './Modal.module.css';

export default function Modal({ drinkModal, closeModal }) {
    console.log(drinkModal);
    function pegaIng(drink) {
        const drinkIngredientes = Object.entries(drink);
        return drinkIngredientes
            .filter(
                ([key, value]) =>
                    key.startsWith("strIngredient") && value && value.trim()
            )
            .map(([key, value]) => value)
            .join(", ");
    };
    return (
        <div id="myModal" className={styles.modal} onClick={(e) => {
            if (e.target.className === styles.modal) closeModal()
        }}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <p class="drinkNome">{drinkModal.strDrink}</p>
                    <button className={styles.close}
                        onClick={() => {
                            closeModal()
                        }}>&times;</button>
                </div>
                <div className={styles.modal_body}>
                    <img alt="Foto Drink" src={drinkModal.strDrinkThumb} className={styles.modalImg} />
                    <p>Categoria: {drinkModal.strCategory}</p>
                    <p>Copo: {drinkModal.strGlass}</p>
                    <p>Ingredientes: {`${pegaIng(drinkModal)}`}</p>
                </div>
                <div className={styles.modal_footer}>
                    <p>Instruções: {drinkModal.strInstructions}</p>
                </div>
            </div>
        </div>
    )
}



