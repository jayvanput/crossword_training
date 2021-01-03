import './ClueSquare.css'

export default function ClueSquare(props) {
    return (
        <div className="square">
            <span>{props.square}</span>
        </div>
    )
}