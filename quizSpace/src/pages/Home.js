import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Video from "../assets/video.mp4";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="headerContainer">
          <video src={Video} autoPlay loop muted/>
          <h1> QUIZ SPACE </h1>
          <p> Test your knowledge here</p>
          <Link to="/quizzes">
            <button> Go to quiz</button>
          </Link>
        </div>
        <div className="bodyContainer" style={{backgroundColor:"black"}}>
          <h1>Quiz Generator</h1>
          <p>Create your custom quiz here</p>
          <Link to="/createquiz">
            <button>Generate a quiz</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;
