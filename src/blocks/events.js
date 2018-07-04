import React from 'react'
import * as Fa from 'react-icons/lib/fa'
import Slider from "react-slick";

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
  events
 }) => (
  <section className="block events">
    <div className="container">
      {(chapterTitle)? <span className="chapter-title">{chapterTitle}</span>: "" }
      {(headline)? <h2 className="headline">{headline}</h2>: "" }
    </div>

      {(events)?
        <Slider className="events" {...settings}>

        </Slider>
      : ""}


  </section>
)

export default Events
