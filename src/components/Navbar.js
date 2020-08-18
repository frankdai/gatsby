import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
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
              {/*<Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>*/}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
