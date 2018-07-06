import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const SellingPoints = ({
  id,
  chapterTitle,
  headline,
  point1Heading,
  point1Body,
  point2Heading,
  point2Body,
  point3Heading,
  point3Body,
  icon
 }) => (
  <section className="block selling-points" id={(id)? id : ""}>
    <div className="container">
      {(chapterTitle)? <span className="chapter-title">{chapterTitle}</span>: "" }
      <div className="grid">
        {(headline)? <h2 className="headline">{headline}</h2>: "" }
        <ul className="selling-points">
        {(point1Heading && point1Body) ?
          <li>
            <ScrollAnimation animateIn="pulse" duration={0.5} initiallyVisible={true}>
              <img src={icon}/>
            </ScrollAnimation>
            <h3>{point1Heading}</h3>
            <p>{point1Body}</p>
          </li>
        : ""}
        {(point2Heading && point2Body) ?
          <li>
            <ScrollAnimation animateIn="pulse" duration={0.5} initiallyVisible={true}>
               <img src={icon}/>
            </ScrollAnimation>
            <h3>{point2Heading}</h3>
            <p>{point2Body}</p>
          </li>
        : ""}
        {(point3Heading && point3Body) ?
          <li>
            <ScrollAnimation animateIn="pulse" duration={0.5} initiallyVisible={true}>
              <img src={icon}/>
            </ScrollAnimation>
            <h3>{point3Heading}</h3>
            <p>{point3Body}</p>
          </li>
        : ""}
        </ul>
      </div>
    </div>
  </section>
)

export default SellingPoints
