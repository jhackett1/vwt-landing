import React from 'react'


import Caret from '../components/caret.js'

const Explanation = ({
  id,
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
  <section className={(reversed)? "block explanation reversed" : "block explanation"} id={(id)? id : ""}>
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
            <a className="button bare" href={secondaryCtaLink}>{secondaryCtaText} <Caret /></a>
          : ""}
        </section>
      </div>
    </div>
  </section>
)

export default Explanation
