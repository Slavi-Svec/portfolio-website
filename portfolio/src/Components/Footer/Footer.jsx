import React from 'react';
import './styles.scss'
import GitHub from '../../Assets/GitHub64.png'
import Twitter from '../../Assets/Twitter64.png'
import Linkedin from '../../Assets/Linkedin64.png'
import Image from '../../Components/Image/Image'



const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__logos">
                <Image src={Linkedin} />
                <Image src={Twitter} />
                <Image src={GitHub} />
            </section>
        </footer>
    )
}

export default Footer


