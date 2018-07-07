import React from 'react'
import PropTypes from 'prop-types'
import ScrollAnimation from 'react-animate-on-scroll'
import ReactMarkdown from 'react-markdown'

const SellingPointsAlt = ({
  id,
  chapterTitle,
  headline,
  point1Icon,
  point1Heading,
  point1Body,
  point2Icon,
  point2Heading,
  point2Body,
  point3Icon,
  point3Heading,
  point3Body
 }) => (
  <section className="block selling-points-alt" id={(id)? id : ""}>
    <div className="container">
      {(chapterTitle)? <span className="chapter-title">{chapterTitle}</span>: "" }
      <div className="grid">
        {(headline)? <h2 className="headline">{headline}</h2>: "" }
        <ul className="selling-points">
        {(point1Heading && point1Body) ?
          <li>
            <ScrollAnimation animateIn="fadeIn" offset={100}>
              <img src={point1Icon}/>
            </ScrollAnimation>
            <h3>{point1Heading}</h3>
            <ReactMarkdown className="body" escapeHtml={false} source={point1Body} />
          </li>
        : ""}
        {(point2Heading && point2Body) ?
          <li>
            <ScrollAnimation animateIn="fadeIn" offset={100}>
              <img src={point2Icon}/>
            </ScrollAnimation>
            <h3>{point2Heading}</h3>
            <ReactMarkdown className="body" escapeHtml={false} source={point2Body} />
          </li>
        : ""}
        {(point3Heading && point3Body) ?
          <li>
            <ScrollAnimation animateIn="fadeIn" offset={100}>
              <img src={point3Icon}/>
            </ScrollAnimation>
            <h3>{point3Heading}</h3>
            <ReactMarkdown className="body" escapeHtml={false} source={point3Body} />
          </li>
        : ""}
        </ul>
      </div>
    </div>
  </section>
)

export default SellingPointsAlt

SellingPointsAlt.propTypes = {
  id: PropTypes.string,
  chapterTitle: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  point1Icon: PropTypes.string,
  point1Heading: PropTypes.string,
  point1Body: PropTypes.string,
  point2Icon: PropTypes.string,
  point2Heading: PropTypes.string,
  point2Body: PropTypes.string,
  point3Icon: PropTypes.string,
  point3Heading: PropTypes.string,
  point3Body: PropTypes.string
}
