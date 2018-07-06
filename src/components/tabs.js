import React from 'react'

import Caret from './caret'

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
      <section className="tabs" role="tablist">

        <div className="container">
          {(this.props.icon)? <div className="icon"><img src={this.props.icon}/></div> : ""}
          {(this.props.headline)? <h2 className="headline">{this.props.headline}</h2>: "" }
          {(this.props.body)? <ReactMarkdown escapeHtml={false} source={this.props.body} />: "" }
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
                    {(this.props.tabQuestions[i])?
                      this.props.tabQuestions[i].map((tabQuestion, j)=>(
                        <details className="question" key={j}>
                          <summary>{tabQuestion}<Caret/></summary>
                          <p>{this.props.tabAnswers[i][j]}</p>

                        </details>
                      ))
                    :""}


                  </div>
                ))
            : ""}
          </div>
        </section>

      </section>
    )
  }
}
