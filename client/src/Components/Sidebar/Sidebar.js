import { Component } from 'react'
import './Sidebar.css'
import DayFilter from './DayFilter'
import DateFilter from './DateFilter'
import SidebarSubmit from './SidebarSubmit'

export default class Sidebar extends Component {
    render() {
        return (
            <div className="col-12 col-md-3 mx-2" id="sidebar">
                <form action="http://localhost:4000/api/" method="get">
                    <div className="row" id="dayfilter">
                        <DayFilter />
                    </div>
                    <div className="row" id="datefilter">
                        <DateFilter />
                    </div>
                    <hr></hr>
                    <div className="row" id="datefilter">
                        <SidebarSubmit />
                    </div>
                </form>
            </div>
        )
    }
}