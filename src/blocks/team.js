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

const Team = ({
  chapterTitle,
  headline,
  teamMembers
 }) => (
  <section className="block team">
    <div className="container">
      {(chapterTitle)? <span className="chapter-title">{chapterTitle}</span>: "" }
      {(headline)? <h2 className="headline">{headline}</h2>: "" }
    </div>

      {(teamMembers)?
        <Slider className="team-members" {...settings}>
          {teamMembers.names.map((teamMemberName, i)=>(
            <li className="team-member">
              <img alt={teamMemberName} src={teamMembers.images[i]}/>
              <h3>{teamMemberName}</h3>
              <h5>{teamMembers.titles[i]}</h5>
              <p>{teamMembers.bios[i]}</p>
              <div className="team-member-social-links">
                {(teamMembers.twitters[i]) ? <a href={teamMembers.twitters[i]}><Fa.FaTwitter/></a> : ""}
                {(teamMembers.linkedins[i]) ? <a href={teamMembers.linkedins[i]}><Fa.FaLinkedin/></a> : ""}
              </div>
            </li>
          ))}
        </Slider>
      : ""}


  </section>
)

export default Team
