import { Component } from 'react'
import axios from 'axios'

export default class DeleteButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        axios.delete('/api', {
            params: {
                id: this.props.id
            }
        }).then(response => {
            this.props.delete_action()
        })
    }
    render() {
        return (
            <button
                type="submit"
                className="btn btn-danger btn-sm m-2"
                onClick={this.handleClick}
            >Delete
            </button>
        )
    }
}