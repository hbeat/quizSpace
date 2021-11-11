import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/homeBanner.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> QUIZ SPACE </h1>
        <p> Test your knowlledge here</p>
        <Link to="/menu">
          <button> Go to quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
