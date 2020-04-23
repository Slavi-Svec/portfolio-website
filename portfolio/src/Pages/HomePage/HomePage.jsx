import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import './styles.scss'
import AvatarLogo from '../../Assets/AvatarLogo.png'
import Image from '../../Components/Image/Image'
import Text from '../../Components/Text/Text'

// Image compon ent, Text and Text component (style in this file appropriately)

const HomePage = () => {
    return (
        <section className="home">
            <Navigation />
            <Text text="this is a string" variant="h1" />
            <Image className="home__logo" src={AvatarLogo} />
        </section>
    )
}


export default HomePage