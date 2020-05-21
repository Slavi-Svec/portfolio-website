import React from 'react';
import cn from 'classnames'
import './styles.scss'

const Button = ({ heading, className, variant }) => {
    return (
        <button
            className={`button__${variant}`}
            onClick={() => window.open()}>{ heading }</button>
    )
}

export default Button