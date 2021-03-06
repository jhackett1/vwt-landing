import React from 'react'
import PropTypes from 'prop-types'
import ScrollAnimation from 'react-animate-on-scroll';
import ReactMarkdown from 'react-markdown'

import Caret from '../components/caret.js'

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
      <section className="block tabs" role="tablist" id={(this.props.id)? this.props.id : ""}>

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
                    <ul className="tab-content">
                      {(this.props.tabContent[i]) ? this.props.tabContent[i].map((contentItem, j)=>(
                        <li key={j} className="tab-content-item">
                          <span className="label">{this.props.tabContentLabels[j]}</span>
                            <span className="value">{contentItem}</span>
                        </li>
                      )): ""}
                    </ul>
                    <h3>{tabName}</h3>
                    {(this.props.tabDescriptions) ? <ReactMarkdown escapeHtml={false} source={this.props.tabDescriptions[i]} /> : ""}
                    <section className="buttons">

                      {(this.props.mainCtaLink && this.props.mainCtaText) ?
                        <a className="button solid" href={this.props.mainCtaLink}>{this.props.mainCtaText}</a>
                      : "" }
                      {(this.props.secondaryCtaLink && this.props.secondaryCtaText) ?
                        <a className="button bare" href={this.props.secondaryCtaLink}>{this.props.secondaryCtaText} <Caret /></a>
                      : ""}
                    </section>

                  </div>
                ))
            : ""}
          </div>
        </section>

      </section>
    )
  }
}

Tabs.propTypes = {
  icon: PropTypes.string,
  headline: PropTypes.string.isRequired,
  body: PropTypes.string,
  tabNames: PropTypes.array.isRequired,
  tabDescriptions: PropTypes.array.isRequired,
  tabContentLabels: PropTypes.array.isRequired,
  tabContent: PropTypes.array,
  mainCtaLink: PropTypes.string,
  mainCtaText: PropTypes.string,
  secondaryCtaLink: PropTypes.string,
  secondaryCtaText: PropTypes.string
}
