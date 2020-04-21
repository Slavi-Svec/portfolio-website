import React from 'react'
import './styles.scss'

const Text = ({ text, variant }) => {
    const HtmlTag = variant
    return (
        <HtmlTag className="text">{text}</HtmlTag>
    )
}

export default Text


