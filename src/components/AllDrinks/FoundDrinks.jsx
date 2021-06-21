/*import React, {useState} from "react";
import {FoundAll, FoundCat, FoundCatCop, FoundIdDrink} from "../../services/fetch.js";
import Modal from "../Modal";

import style from "./FoundDrinks.module.css";

export default function FoundDrinks(){
    let drinkName =" ";
    const [data, setData] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [modal, setModal] = useState([]);
    const [dadosModal, setDadosModal]= useState([]);

    async function drinkId(id){
        setDadosModal(await FoundIdDrink(id));
    }
    function returnModal(){
        if(modal) return <Modal drinksModal={dadosModal} closeModal={openModal}/>
    }
    function openModal(){
        setModal(!modal);
    }

    function EnvCat(a){
        if(a.target.value === 'Categoria') {
            setCategoria([
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
          } else if (a.target.value === 'Copo') {
            setCategoria([
              'Highball glass',
              'Cocktail glass',
              'Old-fashioned glass',
              'Collins glass',
            ]);
          }
        }
        async function CatDrink(a) {
            let nameCategoria = a.target.value;
            if(nameCategoria === 'Alcoholic' || nameCategoria === 'Non Alcoholic'){
                const dados = await FoundAll(nameCategoria);
                setData(dados);
            }
            else if(nameCategoria === 'Ordinary Drink' || nameCategoria === 'Cocktail' || nameCategoria === 'Cocoa' || nameCategoria === 'Shot' || nameCategoria === 'Milk / Float / Shake' || nameCategoria === 'Other / Unknown' || nameCategoria === 'Coffee / Tea' || nameCategoria === 'Homemade Liqueur' || nameCategoria === 'Punch / Party Drink' || nameCategoria === 'Beer' || nameCategoria === 'Soft Drink / Soda' ){
                const dados = await FoundCat(nameCategoria);
                setData(dados);
            }
            else if(nameCategoria === 'Highball glass' || nameCategoria === 'Cocktail glass' || nameCategoria === 'Old-fashioned glass' || nameCategoria === 'Collins glass'){
                const dados = await FoundCatCop(nameCategoria);
                setData(dados);
            }
        }
        async function foundDrink(a){
            a.preventDefault();
            drinkName= a.target.campName.value;
            const drinkDado = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
            )
            const response = await drinkDado.json();
            setData(response.drinks);
            console.log(data)
        }
        return(
            <div>
      {returnModal()}
      <div className={style.divPesquisaNav}>
        <form onSubmit={foundDrink}>
          <input name="campoNome" placeholder="Digite o nome" />
          <button className={style.pesquisaBtn}><img alt="Foto Lupa" src="/pesquisa-de-lupa.png" /></button>
        </form>
        <select onChange={EnvCat}>
          <option selected disabled>Selecione</option>
          <option value="Alcóolico">Alcóolico</option>
          <option value="Categoria">Categoria</option>
          <option value="Copo">Copo</option>
        </select>
        <select onChange={foundDrink}>
          <option selected disabled>Selecione</option>
          {
            categoria.map((categoriaNome, i) => {
              return (
                <option key={i}>{categoriaNome}</option>
              )
            })
          }
        </select>
      </div>
      <div className={style.divDrinksPesquisa}>
        {data ? (
          data.map((drink) => {
            return (
              <div key={drink.idDrink} className={style.drinkDiv}>
                <p class="drinkNome">{drink.strDrink}</p>
                <img
                  alt="Foto Drink"
                  className={style.drinkImg}
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
          <img alt="Foto erro 404" src="https://st3.depositphotos.com/1006899/14648/i/600/depositphotos_146482703-stock-photo-robot-holding-the-numbers-404.jpg" />}
      </div>
    </div>
        )
    }*/
