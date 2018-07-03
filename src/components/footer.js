import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteTitle }) => (
  <div>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </div>
)

export default Footer
