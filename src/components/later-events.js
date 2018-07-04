import React from 'react'

export default class LaterEvents extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      expanded: false
    }
  }

  showMore(){
    this.setState({
      expanded: true
    })
  }

  render(){
    return(
      <section className="later-events">
        <h4>Later this year</h4>
        <ul className="later-events-list">
          {(this.state.expanded)?
            this.props.laterEvents.names.map((eventName, i)=>(
              <li key={i} className="later-events-item">
                <div className="image" style={{backgroundImage: `url(${this.props.laterEvents.images[i]})`}}></div>
                <aside>
                  <h5>{eventName}</h5>
                  <p>{this.props.laterEvents.timeplaces[i]}</p>
                </aside>
              </li>
            ))
          :
            this.props.laterEvents.names.slice(0,3).map((eventName, i)=>(
              <li key={i} className="later-events-item">
                <div className="image" style={{backgroundImage: `url(${this.props.laterEvents.images[i]})`}}></div>
                <aside>
                  <h5>{eventName}</h5>
                  <p>{this.props.laterEvents.timeplaces[i]}</p>
                </aside>
              </li>
            ))
          }
        </ul>
        {(this.state.expanded)? null : <button onClick={this.showMore.bind(this)}>Show more</button>}
      </section>
    )
  }
}
