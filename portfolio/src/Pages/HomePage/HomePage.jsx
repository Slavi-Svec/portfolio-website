import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import NavigationWrapper from '../../Components/NavigationWrapper/NavigationWrapper'
import AvatarLogo from '../../Assets/AvatarLogo.png'
import Image from '../../Components/Image/Image'
import Text from '../../Components/Text/Text'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/Button/Button'
import Landscape from '../../Assets/Landscape.svg'
import './styles.scss'

const HomePage = () => {
    return (
        <section className="home">
            <div className="home__section">
                <Navigation />
                <NavigationWrapper />
                <section className="home__description">
                    <Text
                        text="Im Slavi"
                        className="home__title"
                        variant="h2"
                    />
                    <Text
                        text="a software developer."
                        className="home__profession"
                        variant="h3"
                    />
                    <Image className="home__landscape" src={Landscape} />
                </section>
            </div>
            <section className="home__description">
                <Image className="home__logo" src={AvatarLogo} />
                <Text text="Hi" variant="h3" />
                <Text
                    text="I'm a software developer based in Sydney, Australia."
                    variant="p"
                />
            </section>
            <section className="home__description">
                <Text text="my details" variant="h2" />
                <Text text="These are also details" variant="h3" />
                <Text text="more detais" variant="p" />
            </section>
            <section className="home__description">
                 <Button heading="Message Me"/>
            </section>
            <Footer />
         </section>
    )
}

export default HomePage