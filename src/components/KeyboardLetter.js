import React from 'react'

export default function KeyboardLetter(props) {
    return (
        <div
            className="letter"
            onClick={() => props.handleLetterClick(props.letter)}
        >
            {props.letter}
        </div>
    )
}