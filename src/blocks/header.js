import React from 'react'
import PropTypes from 'prop-types'
import * as Fa from 'react-icons/lib/fa'
import Link from 'gatsby-link'
import Scrollchor from 'react-scrollchor';

import MenuToggle from '../components/menu-toggle'
import MobileMenu from '../components/mobile-menu'

export default class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      atTop: true,
      menuOpen: false
    }
    this.handleMenuToggle = this.handleMenuToggle.bind(this)
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
      <div>
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
          {(this.props.ctaLink && this.props.ctaText) ?
            <a className="button gradient small" href={this.props.ctaLink}>{this.props.ctaText}</a>
          : ""}
        </div>
      </header>

      <div onClick={this.handleMenuToggle.bind(this)} className={(this.state.menuOpen)? "frost-cover open" : "frost-cover"}></div>
      <MobileMenu
        open={this.state.menuOpen}
        menuText={this.props.menuText}
        menuLinks={this.props.menuLinks}
        organisationFacebook={this.props.organisationFacebook}
        organisationLinkedin={this.props.organisationLinkedin}
        organisationTwitter={this.props.organisationTwitter}
        ctaLink={this.props.ctaLink}
        ctaText={this.props.ctaText}
        handleMenuToggle={this.handleMenuToggle}
        />


      </div>
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
