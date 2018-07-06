import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

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
        {(body)? <p><ReactMarkdown escapeHtml={false} source={body} /></p>: "" }
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

Explanation.propTypes = {
  id: PropTypes.string,
  chapterTitle: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  body: PropTypes.string,
  reversed: PropTypes.bool,
  mainCtaText: PropTypes.string,
  mainCtaLink: PropTypes.string,
  secondaryCtaText: PropTypes.string,
  secondaryCtaLink: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string
}
