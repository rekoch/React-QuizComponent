import React, {Component} from 'react'
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {incorrectAnswer: false};
    }

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section>
                    <ul>
                        {this.props.quiz_question.answer_options.map((answerOption, index) =>
                            <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={index}
                                                button_text={answerOption}/>
                        )}
                    </ul>
                </section>
                {this.state.incorrectAnswer
                    ? <p className={'error'}>Sorry, that's not right</p>
                    : null
                }
            </main>
        )
    }

    handleClick(buttonText) {
        if (this.props.quiz_question.answer === buttonText) {
            this.setState({incorrectAnswer: false});
            this.props.showNextQuestionHandler();
        } else {
            this.setState({incorrectAnswer: true});
        }
    }
}

export default QuizQuestion;
