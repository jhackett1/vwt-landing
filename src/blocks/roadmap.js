import React from 'react'
import PropTypes from 'prop-types'
import * as Fa from 'react-icons/lib/fa'
import ScrollAnimation from 'react-animate-on-scroll'

const Roadmap = ({
  id,
  chapterTitle,
  milestones
 }) => (
  <section className="block roadmap" id={(id)? id : ""}>
    <div className="container">
      {(chapterTitle)? <span className="chapter-title">{chapterTitle}</span>: "" }
      {(milestones)?
        <ul className="milestones">
          {milestones.dates.map((date, i)=>(

              <li key={i} className={(milestones.checked[i])? "milestone checked" : "milestone"}>
                <div className={(milestones.checked[i])? "icon checked" : "icon"}>
                  {(milestones.checked[i])?
                    <svg height="8" viewBox="0 0 11 8" width="11"><path d="m11 15.1104002 2.8013301 2.8013302 5.9117304-5.9117304" fill="none" strokeWidth="1.333333" transform="translate(-10 -11)"/>
                    </svg>
                   : null}
                </div>
                <ScrollAnimation animateIn="fadeIn" offset={50} animateOnce={true}>
                  <h5>{date}</h5>
                  <p>{milestones.descriptions[i]}</p>
                </ScrollAnimation>
              </li>

          ))}
        </ul>
      : ""}
    </div>
  </section>
)

export default Roadmap

Roadmap.propTypes = {
  id: PropTypes.string,
  chapterTitle: PropTypes.string.isRequired,
  milestones: PropTypes.object.isRequired
}
