import React from 'react';
import Navigation from '../../Components/Navigation/Navigation'
import AvatarLogo from '../../Assets/AvatarLogo.png'
import Button from '../../Components/Button/Button'
// import MessageButton from '../../Components/MessageButton/MesageButton'
import Footer from '../../Components/Footer/Footer'
import Text from '../../Components/Text/Text'


const PortfolioPage = () => {
    return (
        <>

         <Navigation />
         <section className="home__description">
                <Text text="my details" variant="h2" />
                <Text text="These are also details" variant="h3" />
                <Text text="more detais" variant="p" />
            </section>
            <section className="home__description">
                 <Button heading="Message Me"/>
            </section>
         <Footer />
        </>
    )
}

export default PortfolioPage
