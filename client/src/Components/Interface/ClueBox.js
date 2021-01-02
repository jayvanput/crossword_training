import './ClueBox.css'
import ClueText from './ClueText'
import ClueSquares from './ClueSquares'

export default function ClueBox() {
    return (
        <div className="row">
            <div className="col">
                <div className="card" id="card-row">
                    <div className="card-body  text-center">
                        <ClueText />
                        <ClueSquares />
                        <button type="submit" className="btn btn-info btn-md m-2">Reveal Letter</button>
                        <input type="text" />
                        <button type="submit" className="btn btn-primary btn-md m-2">Submit</button>
                        <button type="submit" className="btn btn-danger btn-sm m-2">Delete</button>
                    </div>

                </div>
            </div>
        </div>
    )
}