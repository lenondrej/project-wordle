import React from 'react';

function GuessInput({handleGuessSubmit, status, answer, numOfGuesses}) {
  const [word, setWord] = React.useState('')

  function handleWordSubmit(event){
    event.preventDefault()
    handleGuessSubmit(word)
    setWord('')
  }

    const happyBanner = <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{numOfGuesses} guesses</strong>.
    </p>
  </div>

  const sadBanner =  (<div className="sad banner">
  <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>)


  return <div>
    <form className="guess-input-wrapper" onSubmit={(event) => handleWordSubmit(event)}>
      <label htmlFor="guess-input">Enter guess:</label>

      { status === 'won' ? happyBanner : undefined}
      { status === 'lost' ? sadBanner : undefined}

      <input 
        id="guess-input" 
        type="text" 
        maxLength={5}
        pattern='[A-Za-z]{5}'
        title="5 letter word"
        required={true} 
        value={word} 
        onChange={(e)=> setWord(e.target.value.toUpperCase())}
        disabled={status !== 'running'}
      />
    </form>
  </div>;
}

export default GuessInput;
