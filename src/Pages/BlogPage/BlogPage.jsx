import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import Image from '../../Components/Image/Image'
import Text from '../../Components/Text/Text'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/Button/Button'
import AvatarLogo2 from '../../Assets/AvatarLogo2.png'
import './styles.scss'

const BlogPage = () => (
  <section className="contact">
    <div className="contact__section">
      <Navigation />
      <section className="contact__description" id="contact__container">
        <Text
          text="Blog"
          className="contact__title"
          variant="h2"
        />
      </section>
    </div>
    <section className="contact__description">
      <Image className="contact__pencil" src={AvatarLogo2} />
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

export default BlogPage
