import React from 'react'
import PropTypes from 'prop-types'
import * as Fa from 'react-icons/lib/fa'
import Link from 'gatsby-link'
import Scrollchor from 'react-scrollchor';

import MenuToggle from '../components/menu-toggle'

export default class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      atTop: true,
      menuOpen: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', (event) => {
        if(window.pageYOffset === 0){
          this.setState({atTop: true})
        } else {
          this.setState({atTop: false})
        }
     });
  }

  handleMenuToggle(){
    console.log(this.state)
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render(){
    return(
      <header className={(this.state.atTop)? "block header blue" : "block header"} >
        <div className="inner">
          <MenuToggle onClick={this.handleMenuToggle.bind(this)}/>
          <Scrollchor to="#"><img className="site-logo" src={this.props.logo} alt="Site logo"/></Scrollchor>
        </div>
        <div className="right">

          {(this.props.menuText && this.props.menuLinks) ?
            <nav className={(this.state.menuOpen)? "site-navigation open" : "site-navigation"}>
              <ul>
                {this.props.menuText.map((item, i)=>(
                  <li key={i} onClick={this.handleMenuToggle.bind(this)}>
                    <Scrollchor to={this.props.menuLinks[i]}>{item}</Scrollchor>
                  </li>
                ))}
              </ul>
              <div>
                {(this.props.ctaLink && this.props.ctaText) ?
                  <a className="button gradient" href={this.props.ctaLink}>{this.props.ctaText}</a>
                : ""}
                <div className="organisation-social-links">
                  {(this.props.organisationTwitter) ?
                    <a target="blank" href={this.props.organisationTwitter}><Fa.FaTwitter/></a> : ""}
                  {(this.props.organisationLinkedin) ?
                    <a target="blank" href={this.props.organisationLinkedin}><Fa.FaLinkedin/></a>
                  : ""}
                  {(this.props.organisationFacebook) ?
                    <a target="blank" href={this.props.organisationFacebook}><Fa.FaFacebook/></a>
                  : ""}
                </div>
              </div>
            </nav>
          : ""}

          <div onClick={this.handleMenuToggle.bind(this)} className={(this.state.menuOpen)? "frost-cover open" : "frost-cover"}></div>
          {(this.props.ctaLink && this.props.ctaText) ?
            <a className="button gradient small" href={this.props.ctaLink}>{this.props.ctaText}</a>
          : ""}
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  id: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaText: PropTypes.string,
  logo: PropTypes.string,
  menuText: PropTypes.array,
  menuLinks: PropTypes.array,
  organisationTwitter: PropTypes.string,
  organisationLinkedin: PropTypes.string,
  organisationFacebook: PropTypes.string,
}
