import React from 'react';
import './styles.scss'
import GitHub from '../../Assets/GitHub64.png'
import Twitter from '../../Assets/Twitter64.png'
import Linkedin from '../../Assets/Linkedin64.png'
import Image from '../../Components/Image/Image'



const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer__logos">
                <li><a href="https://example.com"><Image src={Linkedin} /> </a></li>
                <li><a href="https://example.com"><Image src={Twitter} /></a></li>
                <li><a href="https://example.com"><Image src={GitHub} /></a></li>
            </ul>
        </footer>
    )
}

export default Footer




