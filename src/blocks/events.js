import React from 'react'
import * as Fa from 'react-icons/lib/fa'
import Slider from "react-slick";

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

const Events = ({
  chapterTitle,
  headline,
  upcomingEvents,
  laterEvents,
  subheadline,
  body,
  ctaLink,
  ctaText
 }) => (
  <section className="block events">
    <div className="container">
      {(chapterTitle)? <span className="chapter-title">{chapterTitle}</span>: "" }
      {(headline)? <h2 className="headline">{headline}</h2>: "" }
    </div>
      {(upcomingEvents)?
        <Slider className="upcoming-events" {...settings}>
          {upcomingEvents.names.map((eventName, i)=>(
            <div key={i} className="upcoming-event">
              <div className="image" style={{backgroundImage: `url(${upcomingEvents.images[i]})`}}></div>
              <div className="inner-text">
                <h3>{eventName}</h3>
                <h5>{upcomingEvents.timeplaces[i]}</h5>
                <p>{upcomingEvents.descriptions[i]}</p>
                {(upcomingEvents.links[i])?
                  <a className="button bare" href={upcomingEvents.links[i]}>Learn more <Caret /></a>
                : "" }
              </div>
            </div>
          ))}
        </Slider>
      : ""}
    <div className="container">
      {(laterEvents)?
        <LaterEvents laterEvents={laterEvents}/>
      : ""}
      {(subheadline)? <h3 className="headline">{subheadline}</h3>: "" }
      {(body)? <p>{body}</p>: "" }
      {(ctaLink && ctaText) ?
        <a className="button solid" href={ctaLink}>{ctaText}</a>
      : "" }
    </div>
  </section>
)

export default Events
