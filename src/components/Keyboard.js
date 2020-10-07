import React from 'react'
import KeyboardLetter from './KeyboardLetter'

export default function Keyboard(props) {
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