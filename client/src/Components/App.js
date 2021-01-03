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
      "days": ["Monday"],
      "start_date": "1993-11-22",
      "end_date": "2017-7-12",
      "clue": "Cutters that cut with the grain",
      "answer": "RIPSAWS"
    }
    this.updateDay = this.updateDay.bind(this)
    this.updateDates = this.updateDates.bind(this)
    this.callAPI = this.callAPI.bind(this)
    this.handleNewClue = this.handleNewClue.bind(this)
  }

  callAPI() {
    let { days, start_date, end_date } = this.state
    let api_params = {
      days,
      start_date,
      end_date
    }
    axios.get('http://localhost:4000/api', {
      params: api_params
    })
      .then(response => {
        if (this.state.clue !== response.data.clue) {
          this.setState({
            "clue": response.data.clue,
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

  handleNewClue(guess) {
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
          <Interface
            values={this.state}
            getNewClue={this.handleNewClue}
          />
        </div>
      </div>
    );
  }
}

export default App;