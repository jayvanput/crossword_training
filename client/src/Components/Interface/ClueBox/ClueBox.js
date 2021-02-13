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
        // Handle enter
        if (e.key === "Enter") {
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

    render() {
        let { clue, answer, revealed } = this.props
        let { _id, day, db_name } = this.props.api_params
        return (
            <div className="row" id="cluebox">
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
                                aria-label="guess_input"
                                type="text"
                                onKeyPress={this.handleInput}
                            />
                            <DeleteButton
                                id={_id}
                                day={day}
                                db_name={db_name}
                                delete_action={this.handleDelete}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}