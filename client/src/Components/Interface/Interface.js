import { Component } from 'react'
import ClueBox from './ClueBox'
export default class Interface extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleReveal = this.handleReveal.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleInput(guess) {
        this.props.handleInput(guess)
    }

    handleReveal() {
        this.props.handleReveal()
    }

    handleDelete() {
        this.props.handleDelete()
    }
    render() {
        let { _id, days, start_date, end_date, clue, answer, revealed } = this.props.values
        let api_params = {
            days,
            start_date,
            end_date,
            _id
        }
        return (
            <div className="col" id="interface">
                <ClueBox
                    api_params={api_params}
                    clue={clue}
                    answer={answer}
                    revealed={revealed}
                    handleInput={this.handleInput}
                    handleReveal={this.handleReveal}
                    handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}