import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const NavBar = () => {
    return(
        <nav>
        <div className="nav-wrapper grey darken-1">
          <Link to="/" className='brand-logo' style={{paddingLeft: 10}} >Friends</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/add">Add Friend</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar