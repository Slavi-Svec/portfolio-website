import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import Image from '../../Components/Image/Image'
import Text from '../../Components/Text/Text'
import Footer from '../../Components/Footer/Footer'
import AvatarLogo3 from '../../Assets/AvatarLogo3.png'
import laptopTemplate from '../../Assets/laptop-template.png'
import './styles.scss'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'

const WorkPage = () => (
  <section className="work">
    <div className="work__section">
      <Navigation />
      <section className="work__description" id="work__container">
        <Text
          text="Projects"
          className="work__title"
          variant="h2"
        />
      </section>
    </div>
    <section className="work__description">
      <Image className="work__logo" src={AvatarLogo3} />
    </section>
    <section>
      <ProjectCard
        variant="primary"
        src={laptopTemplate}
        title="weather app"
        description="A simple weather app that displays the current weather and 5 day forecast. Using React and
                     SASS. The updated datais are accessed from open weather maps api"
      />
    </section>
    <section className="work__description">
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


export default WorkPage
