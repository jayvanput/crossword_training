
export default function DayInput(props) {
    return (
        <div className="form-check ml-4">
            <input className="form-check-input" type="checkbox" id={`flexCheckDefault${props.day}`} />
            <label className="form-check-label" htmlFor={`flexCheckDefault${props.day}`}>
                {props.day}
            </label>
        </div>
    )
}