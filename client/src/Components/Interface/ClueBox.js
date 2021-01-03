import { Component } from 'react'
import './ClueBox.css'
import ClueText from './ClueText'
import ClueSquares from './ClueSquares'
export default class ClueBox extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this)
        this.inputUpdate = this.inputUpdate.bind(this)
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
        let { answer } = this.props;
        // Handle enter
        if (e.key === "Enter") {
            console.log("Enter")
            if (guess.toUpperCase() === answer) {
                this.props.handleInput()
                this.inputUpdate(e.target, "lightgreen")
            } else {
                this.inputUpdate(e.target, "pink")
                this.props.handleReveal()
            }
        }
    }

    render() {
        let { clue, answer, revealed } = this.props
        return (
            <div className="row" >
                <div className="col">
                    <div className="card" id="card-row">
                        <div className="card-body  text-center">
                            <ClueText
                                clue={clue}
                                answer={answer} />
                            <ClueSquares
                                answer={answer}
                                revealed={revealed}
                            />
                            <button type="submit" className="btn btn-info btn-md m-2">Reveal letter</button>
                            <input
                                type="text"
                                onKeyPress={this.handleInput}
                            />
                            <button
                                type="submit"
                                className="btn btn-primary btn-md m-2"
                            >Submit</button>
                            <button type="submit" className="btn btn-danger btn-sm m-2">Delete</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}