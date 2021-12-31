import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({ name, image, detail}) {
  return (
    <div className="categoryItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {detail} </p>
    </div>
  );
}

export default CategoryItem;
