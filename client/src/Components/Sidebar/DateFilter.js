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
                        <form>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="start_date">Start</label>
                                </div>
                            </div>
                            <input
                                id="start_date"
                                name="start_date"
                                type="date"
                                defaultValue="1993-11-22"
                                min="1993-11-22"
                                max="2017-07-12"
                                onChange={this.handleDateChange}
                            />
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <div className="row">to</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="end_date">End</label>
                                </div>
                            </div>
                            <input
                                id="end_date"
                                name="end_date"
                                type="date"
                                defaultValue="2017-07-12"
                                min="1993-11-22"
                                max="2017-07-12"
                                onChange={this.handleDateChange} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}