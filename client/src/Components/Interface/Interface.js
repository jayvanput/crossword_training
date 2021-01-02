import { Component } from 'react'
import './Interface.css'
import ClueBox from './ClueBox'
export default class Interface extends Component {
    render() {
        return (
            <div className="col" id="interface">
                <ClueBox />
            </div>
        )
    }
}