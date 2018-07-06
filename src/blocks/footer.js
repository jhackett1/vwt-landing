import React from 'react'
import * as Fa from 'react-icons/lib/fa'
import PropTypes from 'prop-types'

const Footer = ({
  id,
  logo,
  organisationName,
  organisationContact,
  organisationTwitter,
  organisationLinkedin,
  organisationFacebook,
  menu,
  children
 }) => (
  <footer className="block footer" id={(id)? id : ""}>
    <div className="container">
    {(logo)?
      <img className="organisation-logo" src={logo}/>
    :""}
    {(organisationName)?
      <h4 className="organisation-name">{organisationName}</h4>
    :""}
    {(organisationContact)?
      <p>{organisationContact}</p>
    :""}

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
    <div className="container footer-lower">
      {(menu)?
        <ul className="footer-menu">
          {menu.text.map((itemText, i)=>(
            <li key={i}>
              <a href={menu.links[i]}>{itemText}</a>
            </li>
          ))}
        </ul>
      :""}
      {children}
    </div>
  </footer>
)

export default Footer

Footer.propTypes = {
  id: PropTypes.string,
  logo: PropTypes.string,
  organisationName: PropTypes.string,
  organisationContact: PropTypes.string,
  organisationTwitter: PropTypes.string,
  organisationLinkedin: PropTypes.string,
  organisationFacebook: PropTypes.string,
  menu: PropTypes.object,
  children: PropTypes.node
}
