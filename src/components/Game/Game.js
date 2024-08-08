import React from 'react'
import GuessInput from '../GuessInput/GuessInput'
import HappyBanner from '../HappyBanner/HappyBanner'
import SadBanner from '../SadBanner/SadBanner'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessResults from '../GuessResults/GuessResults'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
	const [guesses, setGuesses] = React.useState([])
	const [status, setStatus] = React.useState('running')
	const numOfGuesses = guesses.length

	function getGameStatus(submission) {
		if (submission === answer) {
			setStatus('won')
		} else if (
			(submission !== answer) &
			(guesses.length >= NUM_OF_GUESSES_ALLOWED - 1)
		) {
			setStatus('lost')
		}
	}

	function handleGuessSubmit(newSubmission) {
		const newGuess = { answer: newSubmission, id: crypto.randomUUID() }
		const updatedGuessList = [...guesses, newGuess]
		setGuesses(updatedGuessList)
		getGameStatus(newGuess.answer)
	}

	return (
		<>
			<GuessResults guesses={guesses} answer={answer} />
			{status === 'won' ? (
				<HappyBanner numOfGuesses={numOfGuesses} />
			) : undefined}
			{status === 'lost' ? <SadBanner answer={answer} /> : undefined}

			<GuessInput handleGuessSubmit={handleGuessSubmit} status={status} />
		</>
	)
}

export default Game
