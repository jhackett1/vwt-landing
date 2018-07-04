import React from 'react'

const Logos = ({ logos }) => (
  <section className="block logos">
    <div className="container">
      {(logos) ? logos.map((logo, i)=>(
        <img className="press-logo" src={logo} key={i} alt="The logo of an organisation talking about us."/>
      )): ""}
    </div>
  </section>
)

export default Logos
