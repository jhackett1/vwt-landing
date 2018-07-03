import React from 'react'

const Explanation = ({
  chapterTitle,
  headline,
  body,
  reversed,
  mainCtaText,
  mainCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  image,
  imageAlt
 }) => (
  <section className="block explanation">
    <div className="container">
      {(chapterTitle)? <span className="chapter-title">{chapterTitle}</span>: "" }
      <div className="grid">
        {(image && imageAlt)? <img src={image} alt={imageAlt}/>: "" }
        {(headline)? <h2 className="headline">{headline}</h2>: "" }
        {(body)? <p>{body}</p>: "" }
        <section className="buttons">
          {(mainCtaLink && mainCtaText) ?
            <a className="button solid" href={mainCtaLink}>{mainCtaText}</a>
          : "" }
          {(secondaryCtaLink && secondaryCtaText) ?
            <a className="button bare" href={secondaryCtaLink}>{secondaryCtaText}</a>
          : ""}
        </section>
      </div>
    </div>
  </section>
)

export default Explanation
