import DayInput from './DayInput'

export default function DayFilter() {
    const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return (
        <div className="col m-2">
            <h3>Filter by day</h3>
            <hr></hr>
            {WEEKDAYS.map(day =>
                <DayInput day={day} key={day} />
            )}
        </div>
    )
}