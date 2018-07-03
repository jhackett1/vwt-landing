import React from 'react'

export default class Tabs extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selectedTab: 0
    }
  }

  handleTabChange(i){
    this.setState({
      selectedTab: i
    })
  }

  render(){

    return(
      <section className="block tabs" role="tablist">

        <div className="container">
          {(this.props.headline)? <h2 className="headline">{this.props.headline}</h2>: "" }
          {(this.props.body)? <p>{this.props.body}</p>: "" }
        </div>

        <nav className="tab-navigation">
          {(this.props.tabNames) ?
            <ul>
              {this.props.tabNames.map((tabName, i)=>(
                <li
                  role="tab"
                  className={(this.state.selectedTab === i) ? "selected" : ""}
                  key={i}
                  id={i}
                  onClick={this.handleTabChange.bind(this, i)}
                  >{tabName}</li>
              ))}
            </ul>
          : ""}
        </nav>
        <section className="tabs">
          <div className="container">
            {(this.props.tabNames) ?
                this.props.tabNames.map((tabName, i)=>(
                  <div
                    role="tabpanel"
                    aria-labelledby={i}
                    key={i}
                    className={(this.state.selectedTab === i) ? "selected tab" : "tab"}
                    >
                    <h3>{tabName}</h3>
                    {(this.props.tabDescriptions) ? <p>{this.props.tabDescriptions[i]}</p> : ""}
                  </div>
                ))
            : ""}
          </div>
        </section>

      </section>
    )
  }
}
