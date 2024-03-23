import React from 'react';

function GuessInput({addGuess}) {
  const [guess, setGuess] = React.useState('');

  function submit(e) {
    e.preventDefault();
    console.log({guess});
    addGuess(guess)
    setGuess('');
  }

  return (
      <form className="guess-input-wrapper" onSubmit={submit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input"
               required
               maxLength={5}
               value={guess}
               pattern={"[A-Za-z]{5}"}
               title={"5 letter words only"}
               onChange={e => setGuess(e.target.value.toUpperCase())}
               type="text"/>
      </form>
  );
}

export default GuessInput;
