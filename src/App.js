import "./App.css";
import Header from "./Components/Header";
import { Searchbar } from "./Components/Searchbar";
import { useState } from "react";
import { RecipesList } from "./Components/RecipesList";

function App() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  return (
    <div className="App">
      <Header />
      <Searchbar setRecipes={setRecipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;
