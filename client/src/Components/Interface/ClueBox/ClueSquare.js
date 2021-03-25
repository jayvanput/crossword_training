import './ClueSquare.css'
import { Component } from 'react'
export default class ClueSquare extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.handleClick(this.props.index)
    }

    render() {
        return (
            <div
                className="square"
                onClick={this.handleClick}
            >
                <span>{this.props.square}</span>
            </div>
        )
    }
}