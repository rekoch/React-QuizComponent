import React, {Component} from 'react'
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section>
                    <ul>
                        {this.props.quiz_question.answer_options.map((answerOption, index) =>
                                <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={index} button_text={answerOption} />
                        )}
                    </ul>
                </section>
            </main>
        )
    }
    handleClick(buttonText) {
        if (this.props.quiz_question.answer === buttonText) {
            this.props.showNextQuestionHandler();
        }
    }
}

export default QuizQuestion;
