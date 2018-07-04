import React from 'react'

const SignUp = ({
  headline,
  body,
  children
 }) => (
  <section className="block sign-up">
    <div className="container">
      {(headline)? <h2 className="headline">{headline}</h2>: "" }
      {(body)? <p>{body}</p>: "" }
      {children }
    </div>
  </section>
)

export default SignUp
