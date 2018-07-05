import React from 'react'

import Caret from '../components/caret.js'

const Hero = ({
  headline,
  strapline,
  mainCtaText,
  mainCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  background,
  children
}) => (
  <section className="block hero">
    {children}
    <div className="container">
      {(strapline)? <p className="strapline">{strapline}</p> : ""}
      <h1>{headline}</h1>
      <nav className="button-row" role="navigation">
        {(mainCtaLink && mainCtaText) ?
          <a className="button gradient" href={mainCtaLink}>{mainCtaText}</a>
        : "" }
        {(secondaryCtaLink && secondaryCtaText) ?
          <a className="button outline" href={secondaryCtaLink}>{secondaryCtaText}<Caret /></a>
        : ""}
      </nav>
    </div>
  </section>
)

export default Hero
