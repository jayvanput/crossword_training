import { Component } from 'react'
import './TypeFilter.css'

export default class TypeFilter extends Component {
    constructor(props) {
        super(props);
        this.onChangeChk = this.onChangeChk.bind(this)
    }

    onChangeChk(e) {
        this.props.onChangeChk(e.target.value)
    }
    render() {
        return (
            <div className="col">
                <h3>Training Type</h3>
                <hr></hr>
                <div id="filter">
                    <select onChange={this.onChangeChk}>
                        <option value="Crosswordese">Crosswordese</option>
                        <option value="Names">Names</option>
                    </select>
                </div>
            </div>

        )
    }
}