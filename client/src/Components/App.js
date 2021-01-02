import Sidebar from "./Sidebar/Sidebar"
import Interface from "./Interface/Interface"
import Header from './Header'
import './App.css'
import { Component } from 'react'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "start_date": "1993-11-22",
      "end_date": "2017-7-12"
    }
    this.handleFilter = this.handleFilter.bind(this)
    this.updateDay = this.updateDay.bind(this)
    this.updateDateRange = this.updateDateRange.bind(this)
  }

  handleFilter() {
    this.setState({
      "test": this.state.test + 1
    })
  }

  updateDay(day) {
    let filtered_days = this.state.days
    if (filtered_days.includes(day)) {
      const idx = filtered_days.indexOf(day)
      filtered_days.splice(idx, 1)
    } else {
      filtered_days.push(day)
    }
    this.setState({
      "days": filtered_days
    })
  }

  updateDateRange(date_params) {
    if (date_params.date_type === "start_date") {
      this.setState({
        "start_date": date_params.date
      })
    } else {
      this.setState({
        "start_date": date_params.date
      })
    }
  }


  render() {
    return (
      <div className="container-md" id="app-container" >
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <Sidebar
            filter={this.handleFilter}
            onDayCheck={this.updateDay}
            onDateChange={this.updateDateRange}
          />
          <Interface test={this.state.test} />
        </div>
      </div>
    );
  }
}

export default App;