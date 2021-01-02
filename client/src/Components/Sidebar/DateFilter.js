

export default function DateFilter() {
    return (
        <div className="col mx-2 mt-2">
            <h3>Filter by date</h3>
            <hr></hr>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <input name="start_date" type="date" />
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div className="row">to</div>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <input name="end_date" type="date" />
                </div>
            </div>
        </div>
    )
}