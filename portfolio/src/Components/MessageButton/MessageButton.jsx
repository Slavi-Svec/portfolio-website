import React from 'react';
import './styles.scss'

const MessageButton = ({ heading }) => {
    return (
        <button onClick={() => window.open()}>{ heading }</button>
    )
}


export default  MessageButton