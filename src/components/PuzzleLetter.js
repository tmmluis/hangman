import React from 'react'

export default function PuzzleLetter(props) {
    return (
        <div className="letter">
            {props.letter.match ? props.letter.value : '_'}
        </div>
    )
}