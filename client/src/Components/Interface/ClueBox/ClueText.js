import './ClueText.css'

export default function ClueText(props) {
    let word = props.answer
    let clue = props.clue
    return (
        <h2 className="card-title">{clue} ({word.length})</h2>
    )
}