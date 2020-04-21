import React from 'react'
import './styles.scss'

const Image = ({ url }) => {
    return (
        <img className="image" src={url}></img>
    )
}

export default Image