import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import './styles.scss'
import AvatarLogo from '../../Assets/AvatarLogo.png'
import Image from '../../Components/Image/Image'
import Text from '../../Components/Text/Text'
import Footer from '../../Components/Footer/Footer'
import MessageButton from '../../Components/MessageButton/MessageButton'

// Image compon ent, Text and Text component (style in this file appropriately)

const HomePage = () => {
    return (
        <section className="home">
            <Navigation />
            <Image className="home__logo" src={AvatarLogo} />
            <Text text="Hi" variant="h1" />
            <MessageButton heading="Message Me"/>
            <Footer footer="this is a footer" />
        </section>
    )
}


export default HomePage