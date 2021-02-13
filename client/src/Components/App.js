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
      "_id": "5ff140e1b4bd587341841c55",
      "day": "Monday",
      "clue": "",
      "answer": " ",
      "revealed": [" ", " ", " ", " ", " ", " ", " "],
      "db_name": "Crosswordese",
      "wiki_data": [],
      "reveal_wiki": false
    }
    this.updateDay = this.updateDay.bind(this)
    this.updateFilter = this.updateFilter.bind(this)
    this.callAPI = this.callAPI.bind(this)
    this.handleNewClue = this.handleNewClue.bind(this)
    this.updateReveal = this.updateReveal.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.callAPI()
  }

  callAPI() {
    let { day, db_name } = this.state
    let api_params = {
      day,
      db_name
    }
    axios.get('/api', {
      params: api_params
    })
      .then(response => {
        let all_data = {}
        all_data['data'] = response.data
        all_data['revealed'] = response.data.answer.split('').map(function (char) {
          return char = ' ';
        })
        all_data['wiki_data'] = []
        // Call Wikipedia API if link exists.
        if (response.data.wiki) {
          let queryUrl = "http://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro=2:&explaintext=1&titles="
          fetch(queryUrl + response.data.wiki)
            .then(response => response.json())
            .then(data => {
              let pageIds = Object.keys(data.query.pages)
              for (let i = 0; i < pageIds.length; i++) {
                let link_ext = data.query.pages[pageIds[i]].title.replace(/\s+/g, '_')
                all_data['wiki_data'].push({
                  "name": link_ext,
                  "url": `https://en.wikipedia.org/wiki/${link_ext}`,
                  "extract": data.query.pages[pageIds[i]].extract
                })
              }
            })
        } else {
          all_data['wiki_data'] = ""
        }
        return all_data
      }).then(response => {
        this.setState({
          "clue": response['data'].clue,
          "answer": response['data'].answer,
          "revealed": response['revealed'],
          "reveal_wiki": false,
          "wiki_data": response['wiki_data'],
          "_id": response['data']._id
        })
      })
  }

  updateDay(day) {
    this.setState({
      day
    }, () => this.callAPI())
  }

  updateFilter(filter) {
    this.setState({
      db_name: filter
    }, () => this.callAPI())
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
    let { _id, day } = this.state
    let api_params = {
      "id": _id,
      day
    }
    axios.delete('/api', {
      params: api_params
    })
    this.callAPI()
  }

  handleClick() {
    this.setState(prevState => ({
      reveal_wiki: !prevState.reveal_wiki
    }))
  }

  render() {
    return (
      <div className="container-md" id="app-container" >
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <Interface
            values={this.state}
            handleInput={this.handleNewClue}
            handleReveal={this.updateReveal}
            handleDelete={this.handleDelete}
            handleClick={this.handleClick}
          />
          <Sidebar
            onDayChange={this.updateDay}
            onFilterChange={this.updateFilter}
          />
        </div>
      </div>
    );
  }
}

export default App;