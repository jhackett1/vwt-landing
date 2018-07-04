import React from 'react'
import Link from 'gatsby-link'

import MenuToggle from '../components/menu-toggle'


export default class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleMenuToggle(){
    console.log(this.state)
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render(){
    return(
      <header className="block header">
        <div>
          <MenuToggle onClick={this.handleMenuToggle.bind(this)}/>
          <Link to="/"><img className="site-logo" src={this.props.logo} alt="Site logo"/></Link>
        </div>
        <div>
          {(this.props.menuText && this.props.menuLinks) ?
            <nav className={(this.state.menuOpen)? "site-navigation open" : "site-navigation"}>
              <ul>
                {this.props.menuText.map((item, i)=>(
                  <li key={i}>
                    <a href={this.props.menuLinks}>{item}</a>
                  </li>
                ))}
              </ul>
              {(this.props.ctaLink && this.props.ctaText) ?
                <a className="button gradient" href={this.props.ctaLink}>{this.props.ctaText}</a>
              : ""}
            </nav>
          : ""}
          <div onClick={this.handleMenuToggle.bind(this)} className={(this.state.menuOpen)? "frost-cover open" : "frost-cover"}></div>
          {(this.props.ctaLink && this.props.ctaText) ?
            <a className="button solid small" href={this.props.ctaLink}>{this.props.ctaText}</a>
          : ""}
        </div>
      </header>
    )
  }
}
