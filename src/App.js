import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";

class App extends Component {
  state = { ...this.getNewEquation(), numQuestions: 0, numCorrect: 0 };

  getNewEquation() {
    let value1 = Math.floor(Math.random() * 100);
    let value2 = Math.floor(Math.random() * 100);
    let value3 = Math.floor(Math.random() * 100);
    let proposedAnswer =
      Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return {
      value1,
      value2,
      value3,
      proposedAnswer
    };
  }

  gradeAnswer(Answer) {
    let { value1, value2, value3, proposedAnswer } = this.state;

    let isAnswerCorrect =
      (value1 + value2 + value3 === proposedAnswer) === Answer;

    this.setState(currentState => ({
      ...this.getNewEquation(),
      numQuestions: currentState.numQuestions + 1,
      numCorrect: isAnswerCorrect
        ? currentState.numCorrect + 1
        : currentState.numCorrect
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game
          value1={this.state.value1}
          value2={this.state.value2}
          value3={this.state.value3}
          proposedAnswer={this.state.proposedAnswer}
          onGradeAnswer={Answer => this.gradeAnswer(Answer)}
          numCorrect={this.state.numCorrect}
          numQuestions={this.state.numQuestions}
        />
        {/* <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${
              this.state.value2
            } + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.gradeAnswer(true)}>True</button>
          <button onClick={() => this.gradeAnswer(false)}>False</button>
          <Score
            numCorrect={this.state.numCorrect}
            numQuestions={this.state.numQuestions}
          />
        </div> */}
      </div>
    );
  }
}

export default App;
