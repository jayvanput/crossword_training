import { Component } from 'react'
import './Sidebar.css'
import DayFilter from './DayFilter'

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDayCheck = this.handleDayCheck.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.value)
        this.props.filter()
    }

    handleDayCheck(day) {
        this.props.onDayCheck(day)
    }

    render() {
        return (
            <div className="col-12 col-md-3" id="sidebar">
                <div className="row" id="dayfilter">
                    <DayFilter onChangeChk={this.handleDayCheck} />
                </div>
            </div >
        )
    }
}