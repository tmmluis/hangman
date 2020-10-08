import React from 'react'
import KeyboardLetter from './KeyboardLetter'

export default function Keyboard(props) {
    return (
        <div className="keyboard">
            {props.keyboard.map((letter, index) => (
                <KeyboardLetter
                    key={index}
                    index={index}
                    value={letter.letter}
                    handleLetterClick={props.handleLetterClick}
                    disabled={letter.disabled}
                />
            ))}
        </div>
    )
}