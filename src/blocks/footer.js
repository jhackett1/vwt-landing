import React from 'react'
import * as Fa from 'react-icons/lib/fa'

const Footer = ({
  logo,
  organisationName,
  organisationContact,
  organisationTwitter,
  organisationLinkedin,
  organisationFacebook

 }) => (
  <footer className="block footer">
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
  </footer>
)

export default Footer
