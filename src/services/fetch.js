export async function FindSomeDrinks(some) {
  const response = await fetch(
    `https://thecocktaildb.com/api/json/v1/1/filter.php?a=${some}`
  );
  const inf = await response.json();
  return inf.drinks;
}

export async function FindDrinks(some) {
  const response = await fetch(
    `https://thecocktaildb.com/api/json/v1/1/filter.php?c=${some}`
  );
  const inf = await response.json();
  return inf.drinks;
}

export async function FindSomeTypeDrinks(some) {
  const response = await fetch(
    `https://thecocktaildb.com/api/json/v1/1/filter.php?g=${some}`
  );
  const inf = await response.json();
  return inf.drinks;
}

export async function SeachDrinks(id) {
  const response = await fetch(
    `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`
  );
  const inf = await response.json();
  return inf.drinks[0];
}
