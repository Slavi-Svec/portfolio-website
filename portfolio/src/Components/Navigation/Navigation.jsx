import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from '../Image/Image'
import './styles.scss'
import AvatarLogo from '../../Assets/AvatarLogo.png'

const Navigation = () => {
    return (
      <nav className="nav">
        <Image className="nav__avatar" src={AvatarLogo}/>
        <header>
          <ul className="nav__list">
            <li>
              <NavLink activeClassName="nav--active" className="nav__link" to='/'>About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav--active" className="nav__link" to='/about'>Projects</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav--active" className="nav__link" to='/users'>Thoughts</NavLink>
            </li>
          </ul>
        </header>
      </nav>
    )
}

export default Navigation