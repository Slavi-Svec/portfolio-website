import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import Image from '../Image/Image'
import './styles.scss'
import AvatarLogo from '../../Assets/AvatarLogo.png'

const Navigation = () => (
  <nav className="nav">
    <Link to="/">
      <Image className="nav__avatar" src={AvatarLogo} />
    </Link>
    <header>
      <ul className="nav__list">
        <li>
          <NavLink
            activeClassName="nav--active"
            className="nav__link"
            to="/"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav--active" className="nav__link" to="/work">Projects</NavLink>
          <NavLink activeClassName="nav--active" className="nav__link" to="/contact">Blog</NavLink>
        </li>
      </ul>
    </header>
  </nav>
)

export default Navigation
