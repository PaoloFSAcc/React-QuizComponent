import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    render() {
        const handleClick = (buttonText) => {};
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map(
                            (element, index) => {
                                return (
                                    <QuizQuestionButton
                                        key={index}
                                        clickHandler={this.handleClick.bind(
                                            this
                                        )}
                                        button_text={element}
                                    ></QuizQuestionButton>
                                );
                            }
                        )}
                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion;
