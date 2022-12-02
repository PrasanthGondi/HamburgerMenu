// Write your code here
import './index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="d1">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <GiHamburgerMenu />
  </div>
)

export default Header
