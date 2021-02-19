import { Component } from 'react'
import './DeleteButton.css'
export default class DeleteButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.handleDelete()
    }

    render() {
        return (
            <button
                type="submit"
                className="btn btn-outline-warning btn-sm"
                onClick={this.handleClick}
            >Report Clue
            </button>
        )
    }
}