import React, { useState } from 'react'
import { FoundAllCat, FoundCat, FoundCatCup, FoundDrinkId } from '../../services/fetch';
import Modal from '../Modal/Modal';

import styles from '../AllDrinks/FoundDrinks.module.css';

export default function DrinksPesquisa() {
  let drinkName = '';
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [modal, setModal] = useState(false);
  const [dadosModal, setDadosModal] = useState({});

  //modal data search

  async function drinkId(id) {
    setDadosModal(await FoundDrinkId(id));
  }
  function retornaModal() {
    if (modal) return <Modal drinkModal={dadosModal} closeModal={openModal} />;
  }
  function openModal() {
    setModal(!modal);
  }

  //search drink by category

  function pegaCategoria(e) {
    if (e.target.value === 'Alcóolico') {
      setCategory(['Alcoholic', 'Non Alcoholic']);
    } else if (e.target.value === 'Category') {
      setCategory([
        'Ordinary Drink',
        'Cocktail',
        'Cocoa',
        'Shot',
        'Milk / Float / Shake',
        'Other / Unknown',
        'Coffee / Tea',
        'Homemade Liqueur',
        'Punch / Party Drink',
        'Beer',
        'Soft Drink / Soda',
      ]);
    } else if (e.target.value === 'Copo') {
      setCategory([
        'Highball glass',
        'Cocktail glass',
        'Old-fashioned glass',
        'Collins glass',
      ]);
    }
  }
  async function drinkCategory(e) {
    let NameCategory = e.target.value;
    if (NameCategory === 'Alcoholic' || NameCategory === 'Non Alcoholic') {
      const dados = await FoundAllCat(NameCategory);
      setData(dados);
    }
    else if (NameCategory === 'Ordinary Drink' || NameCategory === 'Cocktail' || NameCategory === 'Cocoa' || NameCategory === 'Shot' || NameCategory === 'Milk / Float / Shake' || NameCategory === 'Other / Unknown' || NameCategory === 'Coffee / Tea' || NameCategory === 'Homemade Liqueur' || NameCategory === 'Punch / Party Drink' || NameCategory === 'Beer' || NameCategory === 'Soft Drink / Soda') {
      const dados = await FoundCat(NameCategory);
      setData(dados);
    }
    else if (NameCategory === 'Highball glass' || NameCategory === 'Cocktail glass' || NameCategory === 'Old-fashioned glass' || NameCategory === 'Collins glass') {
      const dados = await FoundCatCup(NameCategory);
      setData(dados);
    }
  }
  //Found drink at name
  async function pesquisaDrink(e) {
    e.preventDefault();
    drinkName = e.target.campoNome.value;
    const drinkDado = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
    )
    const response = await drinkDado.json();
    setData(response.drinks);
    console.log(data);
  }
  return (
    <div>
      {retornaModal()}
      <div className={styles.divResearchNav}>
        <form onSubmit={pesquisaDrink}>
          <input name="campoNome" placeholder="Digite o nome" />
          <button className={styles.researchBtn}>Search</button>
        </form>
        <select onChange={pegaCategoria}>
          <option selected disabled>Select</option>
          <option value="Alcóolico">alcoholic</option>
          <option value="Categoria">category</option>
          <option value="Copo">glass</option>
        </select>
        <select onChange={drinkCategory}>
          <option selected disabled>Select</option>
          {
            category.map((categoryName, i) => {
              return (
                <option key={i}>{categoryName}</option>
              )
            })
          }
        </select>
      </div>
      <div className={styles.divresearch}>
        {data ? (
          data.map((drink) => {
            return (
              <div key={drink.idDrink} className={styles.drinkDiv}>
                <p class="drinkName">{drink.strDrink}</p>
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
          })
        ) :
          <img src="/error.png" alt="imagem de erro" className={styles.lastImg} />}
      </div>
    </div>
  )
}