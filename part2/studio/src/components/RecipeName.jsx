import recipes from "./recipe.json";

function RecipeName() {
  const name = recipes.name;
  return <h1>{name}</h1>
}

export default RecipeName;

//import return the name of the recipe as a level 1 header