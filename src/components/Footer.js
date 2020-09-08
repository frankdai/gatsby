import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-white-ter">
          <div className="container has-text-white-ter">
            <p>Copyright © 2020 Metallor Co.Ltd. All rights reserved</p>
            <p>Address: ALIC Center, 8 Tianda Road, Hefei, Anhui, China</p>
            <p>Email: sid@metalloroem.com</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
