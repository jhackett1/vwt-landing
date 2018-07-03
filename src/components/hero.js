import React from 'react'

const Hero = ({
  headline,
  strapline,
  mainCtaText,
  mainCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  logo,
  background
}) => (
  <section className="block hero">
    {(logo) ? <img className="logo" src={logo}/> : ""}
    <div className="container">
      {(strapline)? <p className="strapline">{strapline}</p> : ""}
      <h1>{headline}</h1>
      <nav className="button-row" role="navigation">
        {(mainCtaLink && mainCtaText) ?
          <a className="button gradient" href={mainCtaLink}>{mainCtaText}</a>
        : "" }
        {(secondaryCtaLink && secondaryCtaText) ?
          <a className="button outline" href={secondaryCtaLink}>{secondaryCtaText}</a>
        : ""}
      </nav>
    </div>
  </section>
)

export default Hero
