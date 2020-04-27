import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import './styles.scss'
import AvatarLogo from '../../Assets/AvatarLogo.png'
import Image from '../../Components/Image/Image'
import Text from '../../Components/Text/Text'
import Footer from '../../Components/Footer/Footer'
import MessageButton from '../../Components/MessageButton/MessageButton'
import Landscape from '../../Assets/Landscape.svg'
// import GitHub from '../../Assets/gitHub.png'

const HomePage = () => {
    return (
        <section className="home">
            <div className="home__section">
                <Navigation />
                <section className="home__description">
                    <Text text="Im Slavi." variant="titletext" />
                    <Text text="a software developer." variant="titledetail" />
                    <Image className="home__landscape" src={Landscape} />
                </section>
            </div>
            <section className="home__description">
                <Image className="home__logo" src={AvatarLogo} />
                <Text text="Hi" variant="h3" />
                <Text text="I'm a software developer based in Sydney, Australia." variant="p" />
            </section>
            <section className="home__description">
                <Text text="my details" variant="h2" />
                <Text text="nnlnlnlnlnln" variant="h3" />
                <Text text="more detais" variant="p" />
            </section>
            <section className="home__description">
                 <MessageButton heading="Message Me"/>
            </section>
            {/* <Image className="home__GitHub" src={GitHub} /> */}
            <Footer footer="this is a footer" />
        </section>
    )
}

export default HomePage