import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion.js";
import QuizEnd from "./QuizEnd.js";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 };
    }

    render() {
        const isQuizEnd =
            this.state.quiz_position - 1 === quizData.quiz_questions.length;

        function showNextQuestion() {
            this.setState((state, props) => {
                return { quiz_position: state.quiz_position + 1 };
            });
        }

        return (
            <div>
                {isQuizEnd ? (
                    <QuizEnd />
                ) : (
                    <QuizQuestion
                        showNextQuestionHandler={this.showNextQuestion.bind(
                            this
                        )}
                        quiz_question={
                            quizData.quiz_questions[
                                this.state.quiz_position - 1
                            ]
                        }
                    />
                )}
            </div>
        );
    }
}

export default Quiz;
