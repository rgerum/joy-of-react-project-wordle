import React from 'react';
import EndBanner from "../EndBanner";

function WinBanner({count}) {
    return <EndBanner className="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{count === 1 ? '1 guess' : `${count} guesses`}</strong>.
      </p>
    </EndBanner>
}

export default WinBanner;
