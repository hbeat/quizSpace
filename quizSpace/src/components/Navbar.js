import React, { useState } from "react";
import Logo from "../assets/quizLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import QuizIcon from "@material-ui/icons/Assignment";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} style={{width:"50px"}}/>  
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/quizzes"> Quizzes </Link>
          <Link to="/createquiz"> Generator </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/quizzes" style={{color:"blue", backgroundColor:"white", padding:"10px", textAlign: "center", borderRadius:"20px"}}> Quizzes </Link>
        <Link to="/createquiz" style={{color:"white", backgroundColor:"blue", padding:"10px", textAlign: "center", borderRadius:"20px"}}>Generator</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
