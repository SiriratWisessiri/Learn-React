import ReactDOM from "../_snowpack/pkg/react-dom.js";
import React from "../_snowpack/pkg/react.js";
import "./IngredientList.css.proxy.js";
function ingredientList(props) {
  const ingredientListItems = props.ingredients.map((ingredient, index) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: index,
      className: ingredient.prepared ? "prepared" : ""
    }, ingredient.name);
  });
  return /* @__PURE__ */ React.createElement("ul", null, ingredientListItems);
}
export default ingredientList;
