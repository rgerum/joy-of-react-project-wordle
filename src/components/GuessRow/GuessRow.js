import React from 'react';
import {range} from "../../utils";

function GuessRow({guess}) {
  return <p className="guess">{
    range(5).map(i => (
      <span className="cell" key={i}>{guess?.substring(i, i+1)}</span>
    ))
  }</p>;
}

export default GuessRow;
