import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";
import Image from '../Image/Image'
import './styles.scss'
import AvatarLogo from '../../Assets/AvatarLogo.png'

const Navigation = () => {
    return (
      <nav className="nav">
      <Link to="/">
      <Image className="nav__avatar" src={AvatarLogo}  />
        </Link>
        <header>
          <ul className="nav__list">
            <li>
              <NavLink
                activeClassName="nav--active"
                className="nav__link"
                to='/'
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav--active" className="nav__link" to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </header>
      </nav>
    )
}

export default Navigation