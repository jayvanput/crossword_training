import { Component } from 'react'
import ClueBox from './ClueBox'
export default class Interface extends Component {
    render() {
        return (
            <div className="col" id="interface">
                <ClueBox />
                <div>{this.props.test}</div>
            </div>
        )
    }
}