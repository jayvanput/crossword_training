import { Component } from 'react'
import './ClueBox.css'
import ClueText from './ClueText'
import ClueSquares from './ClueSquares'
export default class ClueBox extends Component {

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
                            <input type="text" />
                            <button type="submit" className="btn btn-primary btn-md m-2">Submit</button>
                            <button type="submit" className="btn btn-danger btn-sm m-2">Delete</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}