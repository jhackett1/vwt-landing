import React from 'react'

import Tabs from '../components/tabs'
import Caret from '../components/caret'

const Faq = ({
  id,
  chapterTitle,
  tabNames,
  tabQuestions,
  tabAnswers,
  subheadline,
  body,
  mainCtaLink,
  mainCtaText,
  secondaryCtaLink,
  secondaryCtaText
}) => (
  <section className="block faq" id={(id)? id : ""}>
    <div className="container">
      {(chapterTitle)? <span className="chapter-title">{chapterTitle}</span>: "" }
      <div className="grid">
        {(tabNames && tabQuestions && tabAnswers)?
          <Tabs tabNames={tabNames} tabQuestions={tabQuestions} tabAnswers={tabAnswers} />
        : ""}
        <section className="get-more-help">
          {(subheadline)? <h3>{subheadline}</h3> : "" }
          {(body)? <p>{body}</p> : "" }
          {(mainCtaLink && mainCtaText) ?
            <a className="button solid" href={mainCtaLink}>{mainCtaText}</a>
          : "" }
          {(secondaryCtaLink && secondaryCtaText) ?
            <a className="button bare" href={secondaryCtaLink}>{secondaryCtaText}<Caret /></a>
          : ""}
        </section>
      </div>
    </div>
  </section>
)

export default Faq
