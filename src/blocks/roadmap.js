import React from 'react'
import * as Fa from 'react-icons/lib/fa'

const Roadmap = ({
  chapterTitle,
  milestones
 }) => (
  <section className="block roadmap">
    <div className="container">
      {(chapterTitle)? <span className="chapter-title">{chapterTitle}</span>: "" }
      {(milestones)?
        <ul className="milestones">
          {milestones.dates.map((date, i)=>(
            <li key={i} className={(milestones.checked[i])? "milestone checked" : "milestone"}>
              <div className={(milestones.checked[i])? "icon checked" : "icon"}>
                {(milestones.checked[i])? <Fa.FaCheck/> : null}
              </div>
              <h5>{date}</h5>
              <p>{milestones.descriptions[i]}</p>
            </li>
          ))}
        </ul>
      : ""}
    </div>
  </section>
)

export default Roadmap
