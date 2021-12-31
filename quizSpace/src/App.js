import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Quizzes from "./pages/Quizzes";
import Questions from "./pages/Questions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/quizzes" exact component={Quizzes} />
          <Route path="/questions" exact component={Questions}/>
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
