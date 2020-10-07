import React from 'react'
import Puzzle from './Puzzle'
import Keyboard from './Keyboard'
import GuessInput from './GuessInput'

class Game extends React.Component {
    constructor(props) {
        super(props)

        // So that white spaces are automatically revealed
        const puzzle = props.answer.split('').map((letter) => {
            if (letter === ' ') {
                return { value: letter, match: true }
            } else {
                return { value: letter, match: false }
            }
        })

        this.state = {
            puzzle,
            answer: props.answer,
            guesses: 0,
            solved: false
        }

        /* state.puzzle is an array of 'letter' objects:
        [
          {
            value: 'A',
            match: false
          },
          {
            ...
          }
        ]
        */

    }

    handleLetterClick = (pick) => {
        const puzzle = [...this.state.puzzle].map((letter) => {
            if (letter.value.toLowerCase() === pick.toLowerCase()) {
                return { ...letter, match: true }
            } else {
                return { ...letter }
            }
        })

        this.setState({ puzzle })
    }

    handleGuess = (guess) => {
        this.setState({
            solved: guess.toLowerCase() === this.state.answer.toLowerCase(),
            guesses: this.state.guesses + 1
        })
    }


    render() {
        return (
            <div>
                <h1>{this.props.category}</h1>
                <Puzzle puzzle={this.state.puzzle} />
                <Keyboard handleLetterClick={this.handleLetterClick} />
                <GuessInput handleGuess={this.handleGuess} />
                {!!this.state.guesses && <h2>{`Your guess is ${this.state.solved ? 'correct' : 'wrong'}!`}</h2>}
            </div>
        )
    }
}

export default Game