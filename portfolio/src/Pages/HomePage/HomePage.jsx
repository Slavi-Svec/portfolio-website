import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import './styles.scss'
import AvatarLogo from '../../Assets/AvatarLogo.png'
import Image from '../../Components/Image/Image'
// Image component, Text and Text component (style in this file appropriately)

const HomePage = () => {
    return (
        <section className="home">
            <Navigation />
            <Image src={AvatarLogo} />
        </section>
    )
}

export default HomePage