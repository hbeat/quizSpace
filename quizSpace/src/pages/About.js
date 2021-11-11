import React from "react";
import "../styles/About.css"
import AboutBackground from "../assets/aboutBackground.jpg";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutBackground})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        &ensp;&ensp;&ensp; Quiz Space is a web-based examination system where quiz is taken online i.e. through the internet or intranet using computer system. 
        The purpose of Quiz Space is to take Quizzes in an efficient manner and no time wasting for checking the paper. The main objective of Quiz Space is to efficiently evaluate the candidate through a fully automated system 
        that not only saves lot of time but also gives fast results. Additionally, a note canvas is prepared in alll quizzes in case the candidate need it for calculation. lastly,
        Make your own quiz and assess anyone’s skills, knowledge, competency, and more!
        </p>
      </div>
    </div>
  )
}

export default About

// import { MenuList } from "../helpers/MenuList";
// import MenuItem from "../components/MenuItem";
// import "../styles/Menu.css";

// function Menu() {
//   return (
//     <div className="menu">
//       <h1 className="menuTitle">Our Menu</h1>
//       <div className="menuList">
//         {MenuList.map((menuItem, key) => {
//           return (
//             <MenuItem
//               key={key}
//               image={menuItem.image}
//               name={menuItem.name}
//               price={menuItem.price}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Menu;
