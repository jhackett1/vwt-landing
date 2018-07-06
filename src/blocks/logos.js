import React from 'react'
import PropTypes from 'prop-types'

import ScrollAnimation from 'react-animate-on-scroll';

const Logos = ({ logos, id }) => (
  <section className="block logos" id={(id)? id : ""}>
    <div className="container">
      {(logos) ? logos.map((logo, i)=>(
        <ScrollAnimation key={i} animateIn="fadeIn" offset={50}>
          <img className="press-logo" src={logo} alt="The logo of an organisation talking about us."/>
        </ScrollAnimation>

      )): ""}
    </div>
  </section>
)

export default Logos

Logos.propTypes = {
  id: PropTypes.string,
  logos: PropTypes.array.isRequired
}
