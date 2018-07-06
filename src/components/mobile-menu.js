import React from 'react'
import * as Fa from 'react-icons/lib/fa'
import Link from 'gatsby-link'
import Scrollchor from 'react-scrollchor';

const MobileMenu = ({
  open,
  menuText,
  menuLinks,
  organisationFacebook,
  organisationLinkedin,
  organisationTwitter,
  ctaLink,
  ctaText,
  handleMenuToggle
}) => (

    <nav className={(open)? "mobile-menu open" : "mobile-menu"}>
      <ul>
        {menuText.map((item, i)=>(
          <li key={i} onClick={handleMenuToggle}>
            <Scrollchor to={menuLinks[i]}>{item}</Scrollchor>
          </li>
        ))}
      </ul>
      <div>
        {(ctaLink && ctaText) ?
          <a className="button gradient" href={ctaLink}>{ctaText}</a>
        : ""}
        <div className="organisation-social-links">
          {(organisationTwitter) ?
            <a target="blank" href={organisationTwitter}><Fa.FaTwitter/></a> : ""}
          {(organisationLinkedin) ?
            <a target="blank" href={organisationLinkedin}><Fa.FaLinkedin/></a>
          : ""}
          {(organisationFacebook) ?
            <a target="blank" href={organisationFacebook}><Fa.FaFacebook/></a>
          : ""}
        </div>
      </div>
    </nav>

)

export default MobileMenu
