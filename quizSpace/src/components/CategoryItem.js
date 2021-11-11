import React from "react";

function CategoryItem({ name, image, detail }) {
  return (
    <div className="categoryItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {detail} </p>
      <button>Start</button>
    </div>
  );
}

export default CategoryItem;
