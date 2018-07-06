import React from 'react'

const SignUp = ({
  id,
  headline,
  body,
  children
 }) => (
  <section className="block sign-up" id={(id)? id : ""}>
    <div className="container">
      {(headline)? <h2 className="headline">{headline}</h2>: "" }
      {(body)? <p>{body}</p>: "" }
      {children }
    </div>
  </section>
)

export default SignUp