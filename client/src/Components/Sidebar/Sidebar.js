import { Component } from 'react'
import './Sidebar.css'
import DayFilter from './DayFilter'
import DateFilter from './DateFilter'

export default class Sidebar extends Component {
    render() {
        return (
            <div className="col-3" id="sidebar">
                <form action="http://localhost:4000/api/" method="get">
                    <div className="row" id="dayfilter">
                        <DayFilter />
                    </div>
                    <div className="row" id="datefilter">
                        <DateFilter />
                    </div>
                    <hr></hr>
                    <button type="submit" className="btn btn-primary btn-block">Filter</button>
                </form>
            </div>
        )
    }
}