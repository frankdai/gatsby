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
            <p>Tel:+86-551-12334567</p>
            <p>Address:Room 321, Hefei, Anhui, P.R.CHINA</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
