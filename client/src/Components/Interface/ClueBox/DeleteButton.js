import { Component } from 'react'
import axios from 'axios'

export default class DeleteButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.handleDelete()
    }

    render() {
        const btn_size = this.props.buttonSize
        return (
            <button
                type="submit"
                className={`btn btn-danger btn-${btn_size} ${btn_size}-2`}
                onClick={this.handleClick}
            >Delete
            </button>
        )
    }
}