import React from "react";
import MessageList from '../MessageList';
import './style.css';

const WallWithMessages = () => {
    return (
        <div className="main">
            <MessageList/>
        </div>
    )
}

export default WallWithMessages;