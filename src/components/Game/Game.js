import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import {checkGuess} from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] =React.useState([]);

  function addGuess(guess) {
    setGuessList([...guessList, checkGuess(guess, answer)])
  }

  return <>
    <GuessResults guessList={guessList}/>
  <GuessInput addGuess={addGuess}/>
  </>;
}

export default Game;
