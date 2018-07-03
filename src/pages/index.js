import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/hero'

const IndexPage = ({data}) => (
  <div>
    <Hero
      title={data.site.siteMetadata.title}
      strapline="Varius World Tech ICO"
      mainCtaLink="#"
      mainCtaText="Buy tokens"
      secondaryCtaLink="#"
      secondaryCtaText="Whitepaper"
    />
  </div>
)

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
