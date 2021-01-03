import { Component } from 'react'

export default class DayInput extends Component {
    constructor(props) {
        super(props);
        this.handleChangeChk = this.handleChangeChk.bind(this)
    }

    handleChangeChk(e) {
        this.props.onChangeChk(e.target.value)
    }
    render() {
        return (
            <div className="row" >
                <div className="col px-5">
                    <div className="form-check">
                        <input
                            defaultChecked={this.props.day === "Monday" ? true : false}
                            value={this.props.day}
                            name="day"
                            className="form-check-input"
                            type="radio"
                            id={`flexCheckDefault${this.props.day}`}
                            onChange={this.handleChangeChk}
                        />
                        <label className="form-check-label" htmlFor={`flexCheckDefault${this.props.day}`}>
                            {this.props.day}
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}