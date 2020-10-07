import React from 'react'

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

export default GuessInput