import React, { useState } from 'react'
import { FoundAllCat, FoundDrinkId } from '../../services/fetch';
import Modal from '../Modal/Modal';

import styles from './PopDrinks.module.css';

export default function DrinksPop() {
    const [control, setControl] = useState(false);
    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);
    const [dadosModal, setDadosModal] = useState({});
    async function drinkId(id) {
        setDadosModal(await FoundDrinkId(id));
    }
    function returnModal() {
        if (modal) return <Modal drinkModal={dadosModal} closeModal={openModal} />;
    }
    function openModal() {
        setModal(!modal);
    }
    async function drinksPopulares() {
        setControl(true);
        const dados = await FoundAllCat(`Alcoholic`);
        setData(dados);
    }
    if (control === false) {
        drinksPopulares();
    }
    return (
        <div className={styles.divDrinksPop}>
            {returnModal()}
            {data.slice(12, 22).map((drink) => {
                return (
                    <div key={drink.idDrink} className={styles.drinkDiv}>
                        <p class="drinkNome">{drink.strDrink}</p>
                        <img
                            alt="Foto Drink"
                            className={styles.drinkImg}
                            src={drink.strDrinkThumb}
                            onClick={() => {
                                openModal()
                                setDadosModal(drink)
                                drinkId(drink.idDrink)
                            }}
                        />
                    </div>
                )
            })}
        </div>
    )
}