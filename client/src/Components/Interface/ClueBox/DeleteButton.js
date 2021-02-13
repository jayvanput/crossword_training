import { Component } from 'react'
import axios from 'axios'

export default class DeleteButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.delete_action()
    }
    render() {
        return (
            <button
                type="submit"
                className="btn btn-danger btn-m m-2"
                onClick={this.handleClick}
            >Delete
            </button>
        )
    }
}