import React from 'react'

import MenuToggle from '../components/menu-toggle'

const Header = ({
  logo,
  ctaText,
  ctaLink,
  menuText,
  menuLinks
 }) => (
  <header className="block header">
    <div>
      <MenuToggle/>
      <img className="site-logo" src={logo} alt="Site logo"/>
    </div>
    <div>
      {(menuText && menuLinks) ?
        <nav className="site-navigation">
          <ul>
            {menuText.map((item, i)=>(
              <li key={i}>{item}</li>
            ))}
          </ul>
        </nav>
      : ""}
      {(ctaLink && ctaText) ?
        <a className="button solid" href={ctaLink}>{ctaText}</a>
      : ""}
    </div>
  </header>
)

export default Header
