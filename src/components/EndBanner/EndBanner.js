import React from 'react';

function BannerWin({count}) {
  return <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in{' '}
      <strong>{count} guesses</strong>.
    </p>
  </div>
}

function BannerLoose({answer}) {
  return <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>
}

function EndBanner({className, children}) {
  return <div className={`banner ${className}`}>{children}</div>
}

export default EndBanner;
