import ReactDOM from "react-dom"
import React from "react"
import './IngredientList.css';

function ingredientList(props) {
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return (
            <li key={index} className={ingredient.prepared ? 'prepared' : ''}>
                { ingredient.name}
            </li>
        );
    });
    return (
        <ul>{ingredientListItems}</ul>
    );
}
export default ingredientList