import React from 'react'
import PropTypes from 'prop-types'
import ScrollAnimation from 'react-animate-on-scroll'
import ReactMarkdown from 'react-markdown'

const SellingPoints = ({
  id,
  chapterTitle,
  headline,
  body,
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
        {(body)? <ReactMarkdown escapeHtml={false} source={body} />: "" }
        <ul className="selling-points">
        {(point1Heading && point1Body) ?
          <li>
            <ScrollAnimation className="image-holder" animateIn="fadeIn" offset={100}>
              <img src={icon}/>
            </ScrollAnimation>
            <h3>{point1Heading}</h3>
            <ReactMarkdown className="body" escapeHtml={false} source={point1Body} />
          </li>
        : ""}
        {(point2Heading && point2Body) ?
          <li>
            <ScrollAnimation className="image-holder" animateIn="fadeIn" offset={100}>
               <img src={icon}/>
            </ScrollAnimation>
            <h3>{point2Heading}</h3>
            <ReactMarkdown className="body" escapeHtml={false} source={point2Body} />
          </li>
        : ""}
        {(point3Heading && point3Body) ?
          <li>
            <ScrollAnimation className="image-holder" animateIn="fadeIn" offset={100}>
              <img src={icon}/>
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

export default SellingPoints

SellingPoints.propTypes = {
  id: PropTypes.string,
  chapterTitle: PropTypes.string.isRequired,
  body: PropTypes.string,
  headline: PropTypes.string.isRequired,
  point1Heading: PropTypes.string,
  point1Body: PropTypes.string,
  point2Heading: PropTypes.string,
  point2Body: PropTypes.string,
  point3Heading: PropTypes.string,
  point3Body: PropTypes.string
}
