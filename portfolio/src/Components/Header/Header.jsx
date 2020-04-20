import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image/Image'

const Header = () => {
    return (
        <nav>
          <Image url="https://via.placeholder.com/150"/>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>
    )
}

export default Header