import './ClueBox.css'
import ClueText from './ClueText'
import ClueSquares from './ClueSquares'

export default function ClueBox() {
    return (
        <div className="row">
            <div className="col">
                <div className="card text-center" id="card-row">
                    <div className="card-body">
                        <ClueText />
                        <ClueSquares />
                        <input type="text" />
                        <button type="submit" className="btn btn-primary btn-md m-2">Submit</button>
                        <button type="submit" className="btn btn-danger btn-sm ">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}