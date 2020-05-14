import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import AvatarLogo from '../../Assets/AvatarLogo.png'
import AvatarLogo2 from '../../Assets/AvatarLogo2.png'
import AvatarLogo3  from '../../Assets/AvatarLogo3.png'
import JSLogo from '../../Assets/JSLogo.png'
import Image from '../../Components/Image/Image'
import Text from '../../Components/Text/Text'
import Footer from '../../Components/Footer/Footer'
import Landscape from '../../Assets/Landscape.svg'
import './styles.scss'

const HomePage = () => {
    return (
        <section className="home">
            <div className="home__section">
                <Navigation />
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
                <section className="home__Work-details">
                <Text text="More about me." variant="h2" />
                </section>
                <Image className="home__logo" src={AvatarLogo3} />
                <Image className="home__logo-JS" src={JSLogo} />
                <Text text="What i can do" variant="h3" />

                <Image className="home__logo" src={AvatarLogo2} />
                <Text text="And when im not coding....." variant="h3" />

            </section>
            <Footer />
         </section>
    )
}

export default HomePage