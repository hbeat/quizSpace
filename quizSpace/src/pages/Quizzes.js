import React from 'react'
import { CategoryList } from "../helpers/CategoryList";
import CategoryItem from "../components/CategoryItem";
import "../styles/Category.css";

function Quizzes() {
    return (
        <div className="category">
      <h1 className="categoryTitle">Category</h1>
      <div className="categoryList">
        {CategoryList.map((categoryItem, key) => {
          return (
            <CategoryItem
              key={key}
              image={categoryItem.image}
              name={categoryItem.name}
              detail={categoryItem.detail}
            />
          );
        })}
      </div>
    </div>
    )
}

export default Quizzes
