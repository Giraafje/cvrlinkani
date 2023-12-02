import React from "react";
import Message from '../Message';
import './style.css';

const MessageList = ({messages}) => {
    return (
        <div className="timeline">
            {messages?.map((message, idx) => <Message key={idx} text={message.text} likes={message.likes} bookMark={message.bookMark}/>)}
        </div>
    )
}

export default MessageList;