import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import Image from '../../Components/Image/Image'
import Text from '../../Components/Text/Text'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/Button/Button'
import Pencil from '../../Assets/Pencil.svg'
import Flag from '../../Assets/Flag.svg'
import './styles.scss'

const ContactPage = () => (
  <section className="contact">
    <div className="contact__section">
      <Navigation />
      <section className="contact__description" id="contact__container">
        <Image className="contact__flag-right" src={Flag} />
        <Image className="contact__flag-left" src={Flag} />
        <Text
          text="Contact Me"
          className="contact__title"
          variant="h2"
        />
      </section>
    </div>
    <section className="contact__description">
      <Image className="contact__pencil" src={Pencil} />
    </section>
    <section className="contact__description">
      <Text text="I can help." variant="h2" />
      <Text text="I'm available to assist on projects." variant="h3" />
      <Text
        text="If you require help on
                 some upcoming work, or just want to say hey, than get in touch."
        variant="p"
      />
    </section>
    <section className="contact__description">
      <Button className="contact__button" heading="Message Me" variant="primary" />
    </section>
    <Footer />
  </section>
)

export default ContactPage
