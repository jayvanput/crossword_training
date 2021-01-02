import { Component } from 'react'
import DayInput from './DayInput'

export default class DayFilter extends Component {
    constructor(props) {
        super(props);
        this.onChangeChk = this.onChangeChk.bind(this)
    }

    onChangeChk(day) {
        this.props.onChangeChk(day)
    }
    render() {
        const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        return (
            <div className="col m-2" >
                <h3>Filter by day</h3>
                <hr></hr>
                { WEEKDAYS.map(day =>
                    <DayInput day={day} key={day} onChangeChk={this.onChangeChk} />
                )}
            </div >
        )
    }
}