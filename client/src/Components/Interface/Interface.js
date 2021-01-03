import { Component } from 'react'
import ClueBox from './ClueBox'
export default class Interface extends Component {
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
                />
            </div>
        )
    }
}