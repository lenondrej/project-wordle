import React from 'react';
import  GuessInput  from '../GuessInput/GuessInput'

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [status, setStatus] = React.useState('running')

  const numOfGuesses = guesses.length

  function getGameStatus(submission){
    if (submission === answer){
      setStatus('won')
    } else if (submission !== answer & guesses.length === 5){
      setStatus('lost')
    }
  }
  
  function handleGuessSubmit(newSubmission){
    const newGuess = {answer: newSubmission, id: crypto.randomUUID()}
    const updatedGuessList = [...guesses, newGuess]
    setGuesses(updatedGuessList)
    getGameStatus(newGuess.answer)
  }

  return <>
    <GuessResults guesses={guesses} answer={answer}/>
    <GuessInput handleGuessSubmit={handleGuessSubmit} status={status} answer={answer} numOfGuesses={numOfGuesses}/>
  </>;
}

export default Game;
