import { Component } from 'react'
import './ClueBox.css'
import ClueText from './ClueText'
import ClueSquares from './ClueSquares'
import DeleteButton from './DeleteButton'
export default class ClueBox extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.inputUpdate = this.inputUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSkip = this.handleSkip.bind(this)
        this.handleSquareClick = this.handleSquareClick.bind(this)
    }

    inputUpdate(color) {
        const input_box = document.getElementById("guess_input")
        input_box.value = ""
        input_box.style.backgroundColor = color
        setTimeout(() => {
            input_box.style.backgroundColor = "transparent"
        }, 500)
    }

    handleSubmit(e) {
        const guess = this.state.value
        const input_box = document.getElementById("guess_input")
        e.preventDefault()
        let { answer, revealed } = this.props;
        if (guess === "?") {
            // Reveal the wiki.
            const header = document.getElementById("header")
            if (header) {
                header.click()
            }
            input_box.value = ""
        }
        else {
            if (guess.toUpperCase() === answer) {
                this.props.handleInput()
                this.inputUpdate("lightgreen")
            } else {
                if (!revealed.includes(" ")) {
                    this.props.handleInput()
                } else {
                    this.inputUpdate("pink")
                    this.props.handleReveal()
                }
            }
        }
        this.setState({ value: "" })
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    handleDelete() {
        this.props.handleDelete()
    }

    handleSkip() {
        this.props.handleSkip()
    }

    handleSquareClick(index) {
        this.props.handleSquareClick(index)
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
                                handleSkip={this.handleSkip}
                                handleClick={this.handleSquareClick}
                            />
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    id="guess_input"
                                    type="text"
                                    placeholder='Enter Answer'
                                    onChange={this.handleChange}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Enter
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}