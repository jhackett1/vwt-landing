import React from 'react'
import Helmet from 'react-helmet'

// Get library CSS
import 'animate.css/animate.min.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Get our SASS
import './index.sass'
import './queries.sass'
import '../pages/custom.sass'

export default class Layout extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <main role="main">
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        {this.props.children()}
      </main>
    )
  }
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
