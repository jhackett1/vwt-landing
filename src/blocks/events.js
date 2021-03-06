import React from 'react'
import PropTypes from 'prop-types'
import * as Fa from 'react-icons/lib/fa'
import Slider from "react-slick";
import MediaQuery from 'react-responsive';
import ReactMarkdown from 'react-markdown'

import Caret from '../components/caret'
import LaterEvents from '../components/later-events'

var settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "20px"
};

var bigSettings = {
  slidesToShow: 3,
  centerPadding: "0px",
  swipe: false,
  draggable: false,
  touchMove: false,
  dots: false
};

const Events = ({
  id,
  chapterTitle,
  headline,
  body1,
  upcomingEvents,
  laterEvents,
  subheadline,
  body2,
  ctaLink,
  ctaText
 }) => (
  <section className="block events" id={(id)? id : ""}>
    <div className="container">
      {(chapterTitle)? <span className="chapter-title">{chapterTitle}</span>: "" }
      {(headline)? <h2 className="headline">{headline}</h2>: "" }
      {(body1)? <ReactMarkdown className="lede" scapeHtml={false} source={body1} />: "" }
    </div>
      {(upcomingEvents)?
        <div>
          <MediaQuery minWidth="800px">
            <Slider className="upcoming-events" {...settings} {...bigSettings}>
              {upcomingEvents.names.map((eventName, i)=>(
                <div key={i} className="upcoming-event">
                  <div className="image" style={{backgroundImage: `url(${upcomingEvents.images[i]})`}}></div>
                  <div className="inner-text">
                    <h3>{eventName}</h3>
                    <h5>{upcomingEvents.timeplaces[i]}</h5>
                    <ReactMarkdown escapeHtml={false} source={upcomingEvents.descriptions[i]} />
                    {(upcomingEvents.links[i])?
                      <a className="button bare" href={upcomingEvents.links[i]}>Learn more <Caret /></a>
                    : "" }
                  </div>
                </div>
              ))}
            </Slider>
            </MediaQuery>

            <MediaQuery maxWidth="800px">
              <Slider className="upcoming-events" {...settings}>
                {upcomingEvents.names.map((eventName, i)=>(
                  <div key={i} className="upcoming-event">
                    <div className="image" style={{backgroundImage: `url(${upcomingEvents.images[i]})`}}></div>
                    <div className="inner-text">
                      <h3>{eventName}</h3>
                      <h5>{upcomingEvents.timeplaces[i]}</h5>
                      <ReactMarkdown escapeHtml={false} source={upcomingEvents.descriptions[i]} />
                      {(upcomingEvents.links[i])?
                        <a className="button bare" href={upcomingEvents.links[i]}>Learn more <Caret /></a>
                      : "" }
                    </div>
                  </div>
                ))}
              </Slider>
            </MediaQuery>
          </div>
      : ""}
    <div className="container grid">
      {(laterEvents)?
        <LaterEvents laterEvents={laterEvents} className="later-events"/>
      : ""}
      {(subheadline)? <h3 className="headline">{subheadline}</h3>: "" }
      {(body2)? <ReactMarkdown escapeHtml={false} source={body2} />: "" }
      {(ctaLink && ctaText) ?
        <a className="button solid" href={ctaLink}>{ctaText}</a>
      : "" }
    </div>
  </section>
)

export default Events

Events.propTypes = {
  id: PropTypes.string,
  chapterTitle: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  body1: PropTypes.string,
  upcomingEvents: PropTypes.object.isRequired,
  laterEvents: PropTypes.object,
  subheadline: PropTypes.string,
  body2: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaText: PropTypes.string
}
