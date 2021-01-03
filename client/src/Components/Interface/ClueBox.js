import { Component } from 'react'
import './ClueBox.css'
import ClueText from './ClueText'
import ClueSquares from './ClueSquares'
import axios from 'axios'
export default class ClueBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "question": "Cutters that cut with the grain",
            "answer": "RIPSAWS"
        }
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/api')
            .then(response => {
                if (this.state.question !== response.data.question) {
                    this.setState({
                        "question": response.data.question,
                        "answer": response.data.answer
                    })
                }
            })
    }
    render() {
        let { question, answer } = this.state
        return (
            <div className="row" >
                <div className="col">
                    <div className="card" id="card-row">
                        <div className="card-body  text-center">
                            <ClueText
                                question={question}
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