import React from 'react';
import './styles.scss'

const MessageButton = ({ heading }) => {
    return (
        <button className="messageButton" onClick={() => window.open()}>{ heading }</button>
    )
}


export default  MessageButton