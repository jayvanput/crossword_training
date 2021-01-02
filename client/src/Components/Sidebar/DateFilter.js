

export default function DateFilter() {
    return (
        <div className="col mx-2 mt-2">
            <h3>Filter by date</h3>
            <hr></hr>
            <input type="date" className="mx-auto" />
            <div style={{ margin: "auto" }}>to</div>
            <input type="date" />
        </div>
    )
}