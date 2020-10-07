import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function PuzzleLetter(props) {
  return (
    <div className="letter">
      {props.letter.match ? props.letter.value : '_'}
    </div>
  )
}

function KeyboardLetter(props) {
  return (
    <div
      className="letter"
      onClick={() => props.handleLetterClick(props.letter)}
    >
      {props.letter}
    </div>
  )
}

function Puzzle(props) {
  return (
    <div className="puzzle">
      {props.puzzle.map((letter, index) => (<PuzzleLetter key={index} letter={letter} />))}
    </div>
  )
}

function Keyboard(props) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  return (
    <div className="keyboard">
      {letters.map((letter, index) => (
        <KeyboardLetter
          key={index}
          letter={letter}
          handleLetterClick={props.handleLetterClick}
        />
      ))}
    </div>
  )
}

class GuessInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { guess: '' }
  }

  handleChange = (e) => {
    this.setState({ guess: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleGuess(this.state.guess)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.guess} onChange={this.handleChange} />
          <input type="submit" value="Guess" />
        </form>
      </div>
    )
  }
}

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

// ========================================

ReactDOM.render(
  <Game answer="Star Wars" category="Movie Title" />,
  document.getElementById('root')
)