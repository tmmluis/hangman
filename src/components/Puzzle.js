import React from 'react'
import PuzzleLetter from './PuzzleLetter'

export default function Puzzle(props) {
    return (
      <div className="puzzle">
        {props.puzzle.map((letter, index) => (<PuzzleLetter key={index} letter={letter} />))}
      </div>
    )
  }