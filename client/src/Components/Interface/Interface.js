import { Component } from 'react'
import ClueBox from './ClueBox/ClueBox'
import AnswerInfo from './AnswerInfo/AnswerInfo'
export default class Interface extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleReveal = this.handleReveal.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput(guess) {
        this.props.handleInput(guess)
    }

    handleReveal() {
        this.props.handleReveal()
    }

    handleDelete() {
        this.props.handleDelete()
    }

    handleClick() {
        this.props.handleClick()
    }


    render() {
        let { _id, day, clue, answer, revealed, db_name, reveal_wiki, wiki_data } = this.props.values
        let api_params = {
            day,
            _id,
            db_name
        }
        return (
            <div className="col" id="interface">
                <ClueBox
                    api_params={api_params}
                    clue={clue}
                    answer={answer}
                    revealed={revealed}
                    handleInput={this.handleInput}
                    handleReveal={this.handleReveal}
                    handleDelete={this.handleDelete}
                />
                {wiki_data ? <AnswerInfo
                    wiki_data={wiki_data}
                    reveal_wiki={reveal_wiki}
                    handleClick={this.handleClick}
                    handleDelete={this.handleDelete}
                /> : <div></div>}
            </div>
        )
    }
}