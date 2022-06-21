import React from "../_snowpack/pkg/react.js";
import "./RecipeTitle.css.proxy.js";
function RecipeTitle(props) {
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h2", null, props.title), /* @__PURE__ */ React.createElement("h3", {
    className: props.feedback.rating <= 3.5 ? "red" : "green"
  }, props.feedback.rating, " from ", props.feedback.reviews, " reviews"));
}
;
export default RecipeTitle;
