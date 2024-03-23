import React from 'react';
import EndBanner from "../EndBanner";

function LooseBanner({answer}) {
  return <EndBanner className="sad">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </EndBanner>
}

export default LooseBanner;
