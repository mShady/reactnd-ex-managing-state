import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    this.onGradeAnswer = props.onGradeAnswer;
  }
  state = { ...this.getNewEquation() };

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
    const { value1, value2, value3, proposedAnswer } = this.state;
    if (Answer === (value1 + value2 + value3 === proposedAnswer)) {
      this.onGradeAnswer(true);
    } else {
      this.onGradeAnswer(false);
    }
    this.setState(() => ({
      ...this.getNewEquation()
    }));
  }

  render() {
    return (
      <div>
        <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${
            this.state.value3
          } = ${this.state.proposedAnswer}`}</p>
        </div>
        <button onClick={() => this.gradeAnswer(true)}>True</button>
        <button onClick={() => this.gradeAnswer(false)}>False</button>
      </div>
    );
  }
}

export default Game;
