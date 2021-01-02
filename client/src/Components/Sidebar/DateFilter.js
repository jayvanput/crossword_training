import { Component } from 'react'

export default class DateFilter extends Component {
    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this)
    }

    handleDateChange(e) {
        const params = {
            "date_type": e.target.name,
            "date": e.target.value
        }
        this.props.onDateChange(params)
    }

    render() {
        return (
            <div className="col mx-2" >
                <h3>Filter by date</h3>
                <hr></hr>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <input
                            name="start_date"
                            type="date"
                            defaultValue="1993-11-22"
                            min="1993-11-22"
                            max="2017-07-12"
                            onChange={this.handleDateChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <div className="row">to</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <input
                            name="end_date"
                            type="date"
                            defaultValue="2017-07-12"
                            min="1993-11-22"
                            max="2017-07-12"
                            onChange={this.handleDateChange} />
                    </div>
                </div>
            </div>
        )
    }
}