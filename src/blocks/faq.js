import React from 'react'

const Faq = ({
  chapterTitle,
  tabs,
  subheadline,
  body,
  mainCtaLink,
  mainCtaText,
  secondaryCtaLink,
  secondaryCtaText
}) => (
  <section className="block faq">
    <div className="container">
      {(chapterTitle)? <span className="chapter-title">{chapterTitle}</span>: "" }
      <div className="grid">
        {(tabs)? <Tabs data={tabs} /> : ""}
        <section className="get-more-help">
          {(subheadline)? <h3>{subheadline}</h3> : "" }
          {(body)? <h3>{body}</h3> : "" }
          {(mainCtaLink && mainCtaText) ?
            <a className="button gradient" href={mainCtaLink}>{mainCtaText}</a>
          : "" }
          {(secondaryCtaLink && secondaryCtaText) ?
            <a className="button outline" href={secondaryCtaLink}>{secondaryCtaText}<Caret /></a>
          : ""}
        </section>
      </div>
    </div>
  </section>
)

export default Faq
