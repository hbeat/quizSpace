import React, { Component, createRef } from "react";
import { QuestionTest } from "../helpers/QuestionList";
import "../styles/Questions.css";
import Video from "../assets/finalPage.mp4"
import { Canvas } from "../components/Canvas";
import { ClearCanvasButton } from "../components/ClearCanvasButton";
export class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: null,
      currentIndex: 0,
      options: [],
      quizEnd: false,
      score: 0,
      disabled: true,
      questionLength: -1,
      question: "",
      all_questions: undefined,
    };
  }

  
  // load question
  loadQuestion = () => {
    const { currentIndex } = this.state;
    //return a question
    this.setState(() => {
      // let x  = {};
      QuestionTest.then((questions) => {
        // console.log(questions.length)
        // console.log(questions[0])
        return {
          questionLength: questions.length,
          question: questions[currentIndex].question,
          options: questions[currentIndex].options,
          answer: questions[currentIndex].answer,
        };
      });
    });
  };
  
  //fetch all question
  async fetchQuestions() {
    try {
      let response = await fetch("http://127.0.0.1:8000/api/questions/");
      let data = await response.json();
      data.forEach((element) => {
        var str = element["options"];
        str = str.substring(1, str.length - 1);
        var list = str.split(",");
        element["options"] = list;
      });
      this.setState({
        all_questions: data,
        questionLength: data.length,
        question: data[this.state.currentIndex].question,
        options: data[this.state.currentIndex].options,
        answer: data[this.state.currentIndex].answer,
      });
    } catch (error) {
      console.log(error);
    }
  }
  //update to next question
  nextQuestion() {
    this.setState({
      question: this.state.all_questions[this.state.currentIndex].question,
      options: this.state.all_questions[this.state.currentIndex].options,
      answer: this.state.all_questions[this.state.currentIndex].answer,
      disabled: true,
    });
    ClearCanvasButton.clear
  }
  //handle click
  nextQuestionHandler = () => {
    const { userAnswer, answer, score } = this.state;
    //increase score
    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }

    this.setState({
      currentIndex: this.state.currentIndex + 1,
      userAnswer: null,
    });
    this.nextQuestion();
  };

  //load another question
  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex !== prevState.currentIndex) {
      this.setState({
        question: this.state.all_questions[this.state.currentIndex].question,
        options: this.state.all_questions[this.state.currentIndex].options,
        answer: this.state.all_questions[this.state.currentIndex].answer,
        // question: this.state.all_questions[currentIndex].question,
        // options: this.state.all_questions[currentIndex].options,
        // answer: this.state.all_questions[currentIndex].answer,
      });
    }
  }

  componentDidMount() {
    // this.loadQuestion();
    this.ref = createRef();
    this.fetchQuestions();
    this.render()
  }

  //check answer
  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  finishHandler = () => {
    const { userAnswer, answer, score } = this.state;
    //increase score
    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }
    if (this.state.currentIndex === this.state.questionLength - 1) {
      this.setState({
        quizEnd: true,
      });
    }
  };

  render() {
    const { question, options, currentIndex, userAnswer, quizEnd, score } =
      this.state;

    //complete quiz
    if (quizEnd) {
      return (
        <div className="finalPage">
          <video src={Video} autoPlay loop muted/>
          <div className="content">
            <div style={{textAlign:"center"}}>
            <h1>You completed the quiz!</h1>
            <h2>
              Your final score is {score} out of {this.state.questionLength}{" "}
              points
            </h2>
            <p>The correct answers for the quiz are</p>
            </div>
            <ul>
              {this.state.all_questions.map((item, index) => (
                <li className="options" key={index}>
                  <p>Question: {item.question}</p>
                  <p>Answer: {item.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    //default
    return (
      <div className="whole">
        <div className="questions">
          <h2>{question}</h2>
          <span>
            {`Question ${currentIndex + 1} of ${this.state.questionLength}`}
          </span>

          {options.map((option) => (
            <p
              key={option.index}
              className={`options ${userAnswer === option ? "selected" : null}`}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}

          {currentIndex < this.state.questionLength - 1 && (
            <button
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              next question
            </button>
          )}
          {currentIndex === this.state.questionLength - 1 && (
            <button onClick={this.finishHandler} disabled={this.state.disabled}>
              finish
            </button>
          )}
        </div>
        
        <div className="canvas">
          <Canvas className="context"/>
          <ClearCanvasButton/>
         </div> 
         
      </div>
    );
  }
}

export default Questions;
