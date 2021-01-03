import { Component } from 'react'
import ClueBox from './ClueBox'
export default class Interface extends Component {
    constructor(props) {
        super(props);
        this.handleNewClue = this.handleNewClue.bind(this);
    }

    handleNewClue(guess) {
        this.props.getNewClue(guess)
    }

    render() {
        let { days, start_date, end_date, clue, answer } = this.props.values
        let api_params = {
            days,
            start_date,
            end_date
        }
        return (
            <div className="col" id="interface">
                <ClueBox
                    api_params={api_params}
                    clue={clue}
                    answer={answer}
                    newClue={this.handleNewClue}
                />
            </div>
        )
    }
}