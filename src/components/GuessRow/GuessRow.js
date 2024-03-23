import React from 'react';
import {range} from "../../utils";

function GuessRow({guess}) {
  return <p className="guess">{
    range(5).map(i => (
      <span className={"cell "+(guess && guess[i].status)} key={i}>{guess && guess[i]?.letter}</span>
    ))
  }</p>;
}

export default GuessRow;
