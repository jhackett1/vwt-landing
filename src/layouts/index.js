import React from 'react'
import Helmet from 'react-helmet'

import Footer from '../components/footer'
import './index.sass'

const Layout = ({ children, data }) => (
  <main role="main">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
    <Footer siteTitle={data.site.siteMetadata.title} />
  </main>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
