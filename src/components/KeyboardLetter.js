import React from 'react'

export default function KeyboardLetter(props) {
    return (
        <button
            className="letter"
            onClick={() => props.handleLetterClick(props.index)}
            disabled={props.disabled}
        >
            {props.value}
        </button>
    )
}