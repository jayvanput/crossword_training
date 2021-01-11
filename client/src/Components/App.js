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
      _id: "5ff140e1b4bd587341841c55",
      "day": "Monday",
      "clue": "",
      "answer": " ",
      "revealed": [" ", " ", " ", " ", " ", " ", " "]
    }
    this.updateDay = this.updateDay.bind(this)
    this.callAPI = this.callAPI.bind(this)
    this.handleNewClue = this.handleNewClue.bind(this)
    this.updateReveal = this.updateReveal.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.callAPI()
  }

  callAPI() {
    let { day, start_date, end_date } = this.state
    let api_params = {
      day,
      start_date,
      end_date
    }
    axios.get('/api', {
      params: api_params
    })
      .then(response => {
        if (this.state.clue !== response.data.clue) {
          let revealed = response.data.answer.split('').map(function (char) {
            return char = ' ';
          })
          this.setState({
            "clue": response.data.clue,
            "answer": response.data.answer,
            "revealed": revealed,
            "_id": response.data._id
          })
        }
      })
  }

  updateDay(day) {
    this.setState({
      day
    })
    this.callAPI()
  }

  updateReveal() {
    let { revealed, answer } = this.state
    let hidden_square_idxs = []
    // Get all letters that are still hidden
    for (let i = 0; i < revealed.length; i++) {
      if (revealed[i] === " ") {
        hidden_square_idxs.push(i)
      }
    }
    // Check if all squares have been revealed.
    if (hidden_square_idxs.length === 0) {
      return
    }

    var reveal_idx = hidden_square_idxs[Math.floor(Math.random() * hidden_square_idxs.length)];
    for (let i = 0; i < revealed.length; i++) {
      if (reveal_idx === i) {
        revealed[i] = answer[i]
      }
    }
    this.setState({
      revealed
    })
  }

  handleNewClue(guess) {
    let { revealed, answer } = this.state
    if (revealed.includes(" ")) {
      let revealed_arr = answer.split("")
      this.setState({
        revealed: revealed_arr
      })
    } else {
      this.callAPI()
    }
  }

  handleDelete() {
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
            handleInput={this.handleNewClue}
            handleReveal={this.updateReveal}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;