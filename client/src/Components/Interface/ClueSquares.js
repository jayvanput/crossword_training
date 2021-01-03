import ClueSquare from './ClueSquare'

export default function ClueSquares(props) {
    return (
        <div className="row">
            <div className="d-flex justify-content-around w-50 mx-auto">
                {
                    props.revealed.map((square, idx) =>
                        <ClueSquare
                            key={idx}
                            square={square}
                        />
                    )
                }
            </div>
        </div>

    )
}