import "./index.css.proxy.js";
import React from "../_snowpack/pkg/react.js";
import RecipeTitle from "./RecipeTitle.js";
import IngredientList from "./IngredientList.js";
import Steps from "./Step.js";
function App() {
  const recipe = {
    title: "Mashed potatoes",
    feedback: {
      rating: 4.8,
      reviews: 20
    },
    ingredients: [
      {name: '3 potatoes, cut into 1/2" pieces', prepared: false},
      {name: "4 Tbsp butter", prepared: false},
      {name: "1/8 cup heavy cream", prepared: false},
      {name: "Salt", prepared: true},
      {name: "Pepper", prepared: true}
    ]
  };
  return /* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement("h1", null, "Recipe Manager"), /* @__PURE__ */ React.createElement(RecipeTitle, {
    title: recipe.title,
    feedback: recipe.feedback
  }), /* @__PURE__ */ React.createElement(IngredientList, {
    ingredients: recipe.ingredients
  }), /* @__PURE__ */ React.createElement(Steps, null));
}
export default App;
