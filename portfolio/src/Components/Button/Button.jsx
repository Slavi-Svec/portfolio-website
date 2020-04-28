import React from 'react';
import './styles.scss'

const Button = ({ heading }) => {
    return (
        <button className="messageButton" onClick={() => window.open()}>{ heading }</button>
    )
}

export default Button