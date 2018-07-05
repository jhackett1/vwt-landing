import React from 'react'

const SellingPointsAlt = ({
  chapterTitle,
  headline,
  body,
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
  <section className="block selling-points-alt">
    <div className="container">
      {(chapterTitle)? <span className="chapter-title">{chapterTitle}</span>: "" }
      <div className="grid">
        {(headline)? <h2 className="headline">{headline}</h2>: "" }
        <ul className="selling-points">
        {(point1Heading && point1Body) ?
          <li>
            <img src={point1Icon}/>
            <h3>{point1Heading}</h3>
            <p>{point1Body}</p>
          </li>
        : ""}
        {(point2Heading && point2Body) ?
          <li>
            <img src={point2Icon}/>
            <h3>{point2Heading}</h3>
            <p>{point2Body}</p>
          </li>
        : ""}
        {(point3Heading && point3Body) ?
          <li>
            <img src={point3Icon}/>
            <h3>{point3Heading}</h3>
            <p>{point3Body}</p>
          </li>
        : ""}
        </ul>
      </div>
    </div>
  </section>
)

export default SellingPointsAlt
