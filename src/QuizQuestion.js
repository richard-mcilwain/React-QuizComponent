import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = { incorrect_answer: false };
  }

  render() {
    const answerOptions = this.props.quiz_question.answer_options.map(
      (answer_option, index) => {
        return (
          <QuizQuestionButton
            key={index}
            button_text={answer_option}
            clickHandler={this.handleClick.bind(this)}
          />
        );
      }
    );
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>{answerOptions}</ul>
        </section>
        {this.state.incorrect_answer === true ? (
          <p className="error">Sorry, that's not right.</p>
        ) : null}
      </main>
    );
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.setState({ incorrect_answer: false });
      this.props.showNextQuestionHandler();
    } else {
      this.setState({ incorrect_answer: true });
    }
  }
}

export default QuizQuestion;
