import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image/Image'
import './styles.scss'
import AvatarLogo from '../../Assets/AvatarLogo.png'

const Header = () => {
    return (
      <nav className="header">
        <Image url="https://via.placeholder.com/150"/>
        <Image url={AvatarLogo}/>
        <header>
          <ul>
            <li>
              <Link className="header__link" to='/'>About</Link>
            </li>
            <li>
              <Link className="header__link" to='/about'>Projects</Link>
            </li>
            <li>
              <Link className="header__link" to='/users'>Thoughts</Link>
            </li>
          </ul>
        </header>
      </nav>
    )
}

export default Header