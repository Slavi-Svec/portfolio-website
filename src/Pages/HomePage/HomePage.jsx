import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import AvatarLogo from '../../Assets/AvatarLogo.png'
import AvatarLogo2 from '../../Assets/AvatarLogo2.png'
import Image from '../../Components/Image/Image'
import Text from '../../Components/Text/Text'
import Footer from '../../Components/Footer/Footer'
import cityOne from '../../Assets/city-aug-3.jpg'
import './styles.scss'

const HomePage = () => (
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
          text="a Web developer."
          className="home__profession"
          variant="h3"
        />
        <Image className="home__landscape" src={cityOne} />
      </section>
    </div>
    <section className="home__description">
      <Image className="home__logo" src={AvatarLogo} />
      <Text text="Hi, Im slavi" variant="h3" />
      <Text
        className="home__bio"
        text="I'm a web developer based in Sydney, Australia.
              Lover of all things Javascript, focusing on front end development."
        variant="p"
      />
      <section className="home__Work-details">
        <Text text="More about me." variant="h2" />
      </section>
      <Text text="What i can do" variant="h3" />
      <Text
        text="I enjoy turning difficult problems into simple and intuitive solutions,
                            creating interesting and beautiful interfaces across web and mobile applications."
        className="home__info"
        variant="p"
      />
      <Text
        text=" My main focus is mobile-friendly responsive websites in HTML, SASS, JavaScript,
                            and React but  I am always willing and eager to learn new skills and technologies for coding
                            stunning webpages. "
        className="home__info"
        variant="p"
      />

      <Image className="home__logo" src={AvatarLogo2} />
      <Text text="And when im not coding....." variant="h3" />
      <Text
        text="Always ready for an adventure traveling to many different types of destinations.
                                Enjoy writing, fitness and drawing"
        className="home__info"
        variant="p"
      />

      <Text
        text="I can help."
        className="home__help"
        variant="h2"
      />
      <Text
        text="Want to work together? I’d love to hear from you."
        className="home__work-together"
        variant="h3"
      />
      <Text
        text="I’m happy to collaborate on projects so if you require help on some upcoming work, or just want to say hi, than get in touch."
        className="home__contacting"
        variant="p"
      />
    </section>
    <Footer />
  </section>
)

export default HomePage
