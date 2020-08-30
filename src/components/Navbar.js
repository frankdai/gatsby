import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.jpeg'
import SubMenuService from "./SubMenuService";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      showServiceSubMenu: false,
      showQualitySubMenu: false,
      showProductSubMenu: false
    }
    this.onMouseOver = (name) => {
      this.setState({
        [`show${name}SubMenu`]: true
      })
    }
    this.onMouseLeave = (name) => {
      this.setState({
        [`show${name}SubMenu`]: false
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
            <img src={logo} alt="Metallor" style={{ width: '88px' }} />
          </Link>
        </div>
        <div className="mtor-navbar-container">
          <div
            id="navMenu"
          >
            <div className="mtor-navbar container">
              <Link className="mtor-navbar-item" to="/">
                Home
              </Link>
              <Link className="mtor-navbar-item" to="/about">
                About
              </Link>
              <div className="mtor-navbar-item has-sub-menu" onMouseEnter={() => this.onMouseOver('Product')} onMouseLeave={() => this.onMouseLeave('Product')}>
                <div>Products</div>
                <ul className="mtor-sub-menu" style={{display: this.state.showProductSubMenu?'block':'none'}}>
                  <li>
                    <Link className="mtor-sub-menu-item" to="/products/residential">
                      Residential
                    </Link>
                  </li>
                  <li>
                    <Link className="mtor-sub-menu-item" to="/products/commercial">
                      Commercial
                    </Link>
                  </li>
                  <li>
                    <Link className="mtor-sub-menu-item" to="/products/industrial">
                      Industrial
                    </Link>
                  </li>
                </ul>
              </div>
              <Link className="mtor-navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="mtor-navbar-item" to="/manufacturing">
                Manufacturing
              </Link>
              <div className="mtor-navbar-item has-sub-menu" onMouseEnter={() => this.onMouseOver('Service')} onMouseLeave={() => this.onMouseLeave('Service')}>
                <div>Services</div>
                <SubMenuService show={this.state.showServiceSubMenu} type={'service'}/>
              </div>
              <div className="mtor-navbar-item has-sub-menu" onMouseEnter={() => this.onMouseOver('Quality')} onMouseLeave={() => this.onMouseLeave('Quality')}>
                <div>Quality</div>
                <SubMenuService show={this.state.showQualitySubMenu} type={'quality'}/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
