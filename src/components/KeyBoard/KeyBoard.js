import React from 'react';

const keys = [
    'QWERTYUIOP'.split(''),
    'ASDFGHJKL'.split(''),
    'ZXCVBNM'.split('')
]
function KeyBoard({letterState}) {

    function letterClass(letter) {
        return letterState[letter] ?
            `key ${letterState[letter]}`
            : 'key'
    }

  return <div className={"keyboard"}>
    {keys.map((row, i) => (
        <div className="keyboard_row" key={i}>
          {row.map((letter, i) => (
              <div className={letterClass(letter)} key={i}>{letter}</div>
          ))}
        </div>
    ))}
  </div>;
}

export default KeyBoard;
