import React from 'react'
import PropTypes from 'prop-types'
import * as Fa from 'react-icons/lib/fa'
import Slider from "react-slick";
import MediaQuery from 'react-responsive';
import ReactMarkdown from 'react-markdown'

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "20px"
};

var bigSettings = {
  initialSlide: 1,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerPadding: "30px"
};

const Team = ({
  id,
  chapterTitle,
  headline,
  teamMembers
 }) => (
  <section className="block team" id={(id)? id : ""}>
    <div className="container">
      {(chapterTitle)? <span className="chapter-title">{chapterTitle}</span>: "" }
    </div>

    <div className="grid">
      {(headline)? <h2 className="headline">{headline}</h2>: "" }
      {(teamMembers)?
      <div>
        <MediaQuery minWidth="800px">
          <Slider className="team-members" {...settings} {...bigSettings}>
            {teamMembers.names.map((teamMemberName, i)=>(
              <li className="team-member" key={i}>
                <img alt={teamMemberName} src={teamMembers.images[i]}/>
                <h3>{teamMemberName}</h3>
                <h5>{teamMembers.titles[i]}</h5>
                <ReactMarkdown escapeHtml={false} source={teamMembers.bios[i]} />
                <div className="team-member-social-links">
                  {(teamMembers.twitters[i]) ? <a target="blank" href={teamMembers.twitters[i]}><Fa.FaTwitter/></a> : ""}
                  {(teamMembers.linkedins[i]) ? <a target="blank" href={teamMembers.linkedins[i]}><Fa.FaLinkedin/></a> : ""}
                </div>
              </li>
            ))}
          </Slider>
        </MediaQuery>

        <MediaQuery maxWidth="800px">
          <Slider className="team-members" {...settings}>
            {teamMembers.names.map((teamMemberName, i)=>(
              <li className="team-member" key={i}>
                <img alt={teamMemberName} src={teamMembers.images[i]}/>
                <h3>{teamMemberName}</h3>
                <h5>{teamMembers.titles[i]}</h5>
                <p>{teamMembers.bios[i]}</p>
                <div className="team-member-social-links">
                  {(teamMembers.twitters[i]) ? <a target="blank" href={teamMembers.twitters[i]}><Fa.FaTwitter/></a> : ""}
                  {(teamMembers.linkedins[i]) ? <a target="blank" href={teamMembers.linkedins[i]}><Fa.FaLinkedin/></a> : ""}
                </div>
              </li>
            ))}
          </Slider>
        </MediaQuery>
      </div>

      : ""}
    </div>

  </section>
)

export default Team

Team.propTypes = {
  id: PropTypes.string,
  chapterTitle: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  teamMembers: PropTypes.object.isRequired
}
