import ClueSquare from './ClueSquare'
import { Component } from 'react'

export default class ClueSquares extends Component {
    constructor(props) {
        super(props);
        this.handleSkip = this.handleSkip.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleSkip() {
        this.props.handleSkip()
    }

    handleClick(index) {
        this.props.handleClick(index)
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="d-flex justify-content-center">
                        {
                            this.props.revealed.map((square, idx) =>
                                <ClueSquare
                                    key={idx}
                                    index={idx}
                                    handleClick={this.handleClick}
                                    square={square}
                                />
                            )
                        }

                    </div>
                </div>
                <div className="col-lg-1">
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.handleSkip}
                    >
                        Skip
                    </button>
                </div>
            </div>

        )
    }
}