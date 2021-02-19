import { Component } from 'react'
import './ClueBox.css'
import ClueText from './ClueText'
import ClueSquares from './ClueSquares'
import DeleteButton from './DeleteButton'
export default class ClueBox extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this)
        this.inputUpdate = this.inputUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSkip = this.handleSkip.bind(this)
    }

    inputUpdate(input, color) {
        input.value = ""
        input.style.backgroundColor = color
        setTimeout(() => {
            input.style.backgroundColor = "transparent"
        }, 500)
    }

    handleInput(e) {
        let guess = e.target.value
        let { answer, revealed } = this.props;
        // Handle info reveal
        if (guess === "?") {
            const header = document.getElementById("header")
            if (header) {
                header.click()
            }
            e.target.value = ""
        }
        // Handle enter
        else if (e.key === "Enter") {
            if (guess.toUpperCase() === answer) {
                this.props.handleInput()
                this.inputUpdate(e.target, "lightgreen")
            } else {
                if (!revealed.includes(" ")) {
                    this.props.handleInput()
                } else {
                    this.inputUpdate(e.target, "pink")
                    this.props.handleReveal()
                }
            }
        }
    }

    handleDelete() {
        this.props.handleDelete()
    }

    handleSkip() {
        this.props.handleSkip()
    }

    render() {
        let { clue, answer, revealed } = this.props
        return (
            <div className="row" id="cluebox">
                <div className="col">
                    <div className="card" id="card-row">
                        <div className="card-body  text-center">
                            <div className="report-button-header">
                                <DeleteButton
                                    handleDelete={this.handleDelete}
                                    text="Report Clue"
                                />
                            </div>

                            <ClueText
                                clue={clue}
                                answer={answer} />
                            <ClueSquares
                                answer={answer}
                                revealed={revealed}
                            />
                            <input
                                aria-label="guess_input"
                                type="text"
                                placeholder='Enter Answer'
                                onKeyPress={this.handleInput}
                            />
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={this.handleSkip}
                            >
                                Skip Clue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}