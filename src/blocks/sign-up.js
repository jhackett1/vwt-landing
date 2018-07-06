import React from 'react'
import PropTypes from 'prop-types'

import MarkdownIt from 'markdown-it'
let md = new MarkdownIt({ html: true });

const SignUp = ({
  id,
  headline,
  body,
  children
 }) => (
  <section className="block sign-up" id={(id)? id : ""}>
    <div className="container">
      {(headline)? <h2 className="headline">{headline}</h2>: "" }
      {(body)? <p dangerouslySetInnerHTML={{ __html: md.render(body) }}></p>: "" }
      {children }
    </div>
  </section>
)

export default SignUp

SignUp.propTypes = {
  id: PropTypes.string,
  headline: PropTypes.string.isRequired,
  body: PropTypes.string,
  children: PropTypes.node
}
