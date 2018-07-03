import React from 'react'

const Header = ({
  logo,
  ctaText,
  ctaLink
 }) => (
  <header className="block header">
      <span className="menu-toggle closed"></span>
      <img className="site-logo"/>
      {(ctaLink && ctaText) ?
        <a className="button solid" href={ctaLink}>{ctaText}</a>
      : ""}
  </header>
)

export default Header
