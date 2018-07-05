import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const Logos = ({ logos }) => (
  <section className="block logos">
    <div className="container">
      {(logos) ? logos.map((logo, i)=>(
        <ScrollAnimation animateIn="fadeIn" offset={50}>
          <img className="press-logo" src={logo} alt="The logo of an organisation talking about us."/>
        </ScrollAnimation>

      )): ""}
    </div>
  </section>
)

export default Logos
