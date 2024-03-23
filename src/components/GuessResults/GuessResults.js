import React from 'react';
import GuessRow from "../GuessRow";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {range} from "../../utils";

function GuessResults({guessList}) {
  return <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map(i => (
        <GuessRow key={i} guess={guessList[i]?.guess}/>
    ))}
  </div>;
}

export default GuessResults;
