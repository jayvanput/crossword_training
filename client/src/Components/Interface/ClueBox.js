import { Component } from 'react'
import './ClueBox.css'
import ClueText from './ClueText'
import ClueSquares from './ClueSquares'
export default class ClueBox extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        let guess = e.target.value
        let { answer } = this.props;
        if (e.key === "Enter") {
            if (guess.toUpperCase() === answer) {
                this.props.newClue()
                e.target.value = ""
                e.target.style.backgroundColor = "lightgreen"
                setTimeout(() => {
                    e.target.style.backgroundColor = "transparent"
                }, 500)
            } else {
                e.target.value = ""
                e.target.style.backgroundColor = "red"
                setTimeout(() => {
                    e.target.style.backgroundColor = "transparent"
                }, 500)
            }
        }
    }

    render() {
        let { clue, answer } = this.props
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