import Sidebar from "./Sidebar/Sidebar"
import Interface from "./Interface/Interface"
import Header from './Header'
import './App.css'
import { Component } from 'react'
import axios from 'axios'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "start_date": "1993-11-22",
      "end_date": "2017-7-12",
      "question": "Cutters that cut with the grain",
      "answer": "RIPSAWS"
    }
    this.updateDay = this.updateDay.bind(this)
    this.updateDates = this.updateDates.bind(this)
    this.callAPI = this.callAPI.bind(this)
  }

  callAPI() {
    axios.get('http://localhost:4000/api', {
      params: this.props.api_params
    })
      .then(response => {
        if (this.state.question !== response.data.question) {
          this.setState({
            "question": response.data.question,
            "answer": response.data.answer
          })
        }
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
    this.callAPI()
  }

  updateDates(date_params) {
    if (date_params.date_type === "start_date") {
      this.setState({
        "start_date": date_params.date
      })
    } else {
      this.setState({
        "end_date": date_params.date
      })
    }
    this.callAPI()
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
            onDateChange={this.updateDates}
          />
          <Interface test={this.state.test} values={this.state} />
        </div>
      </div>
    );
  }
}

export default App;