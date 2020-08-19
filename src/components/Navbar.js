import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import SubMenuService from "./SubMenuService";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      showServiceSubMenu: false
    }
    this.onMouseOver = () => {
      this.setState({
        showServiceSubMenu: true
      })
    }
    this.onMouseLeave = () => {
      this.setState({
        showServiceSubMenu: false
      })
    }
  }

  render() {
    return (
      <nav
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container" style={{padding: '1em'}}>
          <Link to="/" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </Link>
        </div>
        <div className="mtor-navbar-container">
          <div
            id="navMenu"
          >
            <div className="mtor-navbar container">
              <Link className="mtor-navbar-item" to="/about">
                About
              </Link>
              {/*<Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>*/}
              <Link className="mtor-navbar-item" to="/contact">
                Contact
              </Link>
              <div className="mtor-navbar-item has-sub-menu" onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
                <div>Services</div>
                <SubMenuService show={this.state.showServiceSubMenu} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
