import { Component } from 'react'
import './AnswerInfo.css'

export default class AnswerInfo extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.handleClick()
    }

    render() {
        return (
            <div id="box" >
                <div id="header">
                    Click to learn more about the answer.
            <button id="toggle" onClick={this.handleClick}>toggle</button>
                </div>
                <div id="body" className={this.props.reveal_wiki ? "visible" : "hidden"}>
                    {this.props.wiki_data.map((entry, idx) => (
                        entry.name
                            ?
                            <div key={idx}>
                                <div key={idx + 1}>{entry.name}</div>
                                <div key={idx + 2}>{entry.extract}</div>
                            </div>
                            :
                            <div key={idx}>{entry}</div>
                    ))}
                </div>

            </div>

        )
    }
}