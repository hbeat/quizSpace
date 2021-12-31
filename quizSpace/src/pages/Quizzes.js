import React, { Component } from "react";
import {CategoryList}  from "../helpers/CategoryList";
import CategoryItem from "../components/CategoryItem";
import "../styles/Category.css";
import { Link } from "react-router-dom";
function test(){
  console.log("hello");
}
function Quizzes() {
  
  return (
    <div className="category">
      <Link to="/questions">
            <button style = {{width: "150px", height: "50px", backgroundColor:"blue", color:"white", borderRadius:"13px", fontFamily: "cursive", fontSize:"20px", marginTop:"50px"}}> Start quiz</button>  {/* style = {{width: "150px", height: "50px", backgroundColor:"blue", color:"white", borderRadius:"13px", fontFamily: "cursive", fontSize:"20px"} */}

      </Link>
      <h1 className="categoryTitle">Category</h1>
      
      <div className="categoryList" onClick={test}>
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
  );
}

export default Quizzes;
