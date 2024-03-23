import React from 'react';
import {range} from "../../utils";

function Cell({status, letter}) {
  const className = status ?
       `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>
}

function GuessRow({guess}) {
  return <p className="guess">{
    range(5).map(i => (
        <Cell key={i} status={guess && guess[i].status} letter={guess && guess[i].letter} />
    ))
  }</p>;
}

export default GuessRow;
