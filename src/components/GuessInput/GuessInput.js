import React from 'react'

function GuessInput({ handleGuessSubmit, status }) {
	const [word, setWord] = React.useState('')

	function handleWordSubmit(event) {
		event.preventDefault()
		handleGuessSubmit(word)
		setWord('')
	}

	return (
		<div>
			<form
				className='guess-input-wrapper'
				onSubmit={event => handleWordSubmit(event)}
			>
				<label htmlFor='guess-input'>Enter guess:</label>

				<input
					id='guess-input'
					type='text'
					maxLength={5}
					pattern='[A-Za-z]{5}'
					title='5 letter word'
					required={true}
					value={word}
					onChange={e => setWord(e.target.value.toUpperCase())}
					disabled={status !== 'running'}
				/>
			</form>
		</div>
	)
}

export default GuessInput
