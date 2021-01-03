import ClueSquare from './ClueSquare'

export default function ClueSquares(props) {
    let word = props.answer
    let word_arr = []

    for (let i = 0; i < word.length; i++) {
        word_arr.push("_")
    }

    return (
        <div className="row">
            <div className="d-flex justify-content-around w-50 mx-auto">
                {
                    word_arr.map((square, idx) =>
                        <ClueSquare key={idx} />
                    )
                }
            </div>
        </div>

    )
}