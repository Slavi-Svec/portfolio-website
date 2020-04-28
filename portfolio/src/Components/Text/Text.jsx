import React from 'react'
import './styles.scss'

const Text = ({ text, variant = 'p' }) => {
    const HtmlTag = variant
    return (
        <HtmlTag className="home__profession">{text}</HtmlTag>
    )
}

export default Text