import { Component } from 'react'
import './Sidebar.css'
import DayFilter from './DayFilter'

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.handleDay = this.handleDay.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
    }

    handleDay(day) {
        this.props.onDayChange(day)
    }

    handleFilter(type) {
        this.props.onFilterChange(type)
    }

    render() {
        return (
            <div className="col-12 col-md-3 order-md-first" id="sidebar">
                <div className="row" id="dayfilter">
                    <DayFilter onChangeChk={this.handleDay} />
                </div>
                {/*<div className="row" id="dayfilter">
                    <TypeFilter onChangeChk={this.handleFilter} />
                </div>*/}
            </div >
        )
    }
}