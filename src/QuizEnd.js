import React, { Component } from "react";

class QuizEnd extends Component {
    render() {
        function handleResetClick(){
            this.props.resetClickHandler();
        }
        return (
            <div>
                <p>Thanks for playing!</p>
                <a onClick ={this.handleResetClick.bind(this)} href="">Reset Quiz</a>
            </div>
        );
    }
}

export default QuizEnd;
