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
                    className="home__bio"
                    text="I'm a software developer based in Sydney, Australia.
                    Lover of all things Javascript, Focusing on front end development
                    primarily using React. "
                    variant="p"
                />
            </section>
            <section className="home__description">
                <Text text="I can help." variant="h2" />
                <Text text="I'm available to assist on projects." variant="h3" />
                <Text text="If you require help on
                 some upcoming work, or just want to say hey, than get in touch." variant="p" />
            </section>
            <section className="home__description">
                <Button className="home__button" heading="Message Me" variant="primary" />
            </section>
            <Footer />
         </section>
    )
}

export default HomePage

