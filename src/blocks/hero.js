import React from 'react'
import PropTypes from 'prop-types'

import Caret from '../components/caret.js'

const Hero = ({
  id,
  headline,
  strapline,
  mainCtaText,
  mainCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  children
}) => (
  <section className="block hero" id={(id)? id : ""}>
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

Hero.propTypes = {
  id: PropTypes.string,
  headline: PropTypes.string.isRequired,
  strapline: PropTypes.string,
  mainCtaText: PropTypes.string,
  mainCtaLink: PropTypes.string,
  secondaryCtaText: PropTypes.string,
  secondaryCtaLink: PropTypes.string,
  children: PropTypes.node
}
