export async function FoundAllCat(categoria) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${categoria}`
  );
  const dados = await response.json();
  return dados.drinks;
}

export async function FoundCat(categoria) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`
  );
  const dados = await response.json();
  return dados.drinks;
}

export async function FoundCatCup(categoria) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${categoria}`
  );
  const dados = await response.json();
  return dados.drinks;
}

export async function FoundDrinkId(id) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const dados = await response.json();
  return dados.drinks[0];
}
