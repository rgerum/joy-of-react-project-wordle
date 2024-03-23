import React from 'react';

const keys = [
    'QWERTYUIOP'.split(''),
    'ASDFGHJKL'.split(''),
    'ZXCVBNM'.split('')
]
function KeyBoard({letterState}) {
    console.log(letterState);

    function letterClass(letter) {
        console.log(letter, letterState[letter])
        return letterState[letter] ?
            `key ${letterState[letter]}`
            : 'key'
    }

  return <div className={"keyboard"}>
    {keys.map((row, i) => (
        <div className="keyboard_row">
          {row.map((letter, i) => (
              <div className={letterClass(letter)}>{letter}</div>
          ))}
        </div>
    ))}
  </div>;
}

export default KeyBoard;
