import React from 'react';
import './styles.scss'

const MessageButton = ({ heading }) => {
    return (
        <button onClick={() => window.open("www.google.com")}>{ heading }</button>
    )
}


export default  MessageButton