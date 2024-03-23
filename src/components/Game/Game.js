import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import {checkGuess} from "../../game-helpers";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import EndBanner from "../EndBanner";
import KeyBoard from "../KeyBoard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [finished, setFinished] = React.useState()
  const [letterState, setLetterState] = React.useState({})

  function addGuess(guess) {
    const check = checkGuess(guess, answer);
    const newLetterState = {...letterState}
    let right = 0;
    for(let letter of check) {
      right += letter.status === "correct";
      if(newLetterState[letter.letter] !== "correct") {
        newLetterState[letter.letter] = letter.status;
      }
    }
    if(right === 5) {
      setFinished("win");
    }
    else if(guessList.length === NUM_OF_GUESSES_ALLOWED-1) {
      setFinished("loose");
    }
    setGuessList([...guessList, check]);
    setLetterState(newLetterState);
  }

  return <>
    <GuessResults guessList={guessList}/>
    <GuessInput addGuess={addGuess} locked={finished !== undefined}/>
    <KeyBoard letterState={letterState}/>
    {finished !== undefined && <EndBanner finished={finished} count={guessList.length} answer={answer}/>}
  </>;
}

export default Game;
