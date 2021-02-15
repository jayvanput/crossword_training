import { Component } from 'react'
import './AnswerInfo.css'
import '../ClueBox/DeleteButton'
import DeleteButton from '../ClueBox/DeleteButton'
export default class AnswerInfo extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleClick() {
        this.props.handleClick()
    }

    handleDelete() {
        this.props.handleDelete()
    }

    render() {
        let names = [];
        for (let i = 0; i < this.props.wiki_data.length; i++) {
            const cleaned_name = this.props.wiki_data[i].name.split("_").join(" ")
            names[i] = cleaned_name;

        }
        return (
            <div id="box" >
                <div id="header" onClick={this.handleClick}>
                    Click to learn more
                </div>
                <div id="body" className={this.props.reveal_wiki ? "visible" : "hidden"}>
                    {this.props.wiki_data.map((entry, idx) => (
                        entry.name
                            ?
                            <div key={idx}>
                                <div id="text_header">
                                    <h1 key={idx + 1} id="name">{names[idx]}</h1>
                                    <DeleteButton
                                        handleDelete={this.handleDelete}
                                        title="Report problem with link"
                                    />
                                </div>
                                <hr></hr>
                                <div key={idx + 2} id="text">{entry.extract}</div>
                                <hr></hr>
                                <div key={idx + 3} id="url">Click <a href={entry.url} target="_blank" rel="noopener noreferrer">here</a> to read more.</div>
                            </div>
                            :
                            <div key={idx}>
                                <div key={idx + 1}>Name</div>a
                            </div>
                    ))}
                </div>

            </div>

        )
    }
}