import React, {useState} from "react";
import MessageList from '../MessageList';
import MessageInput from "../MessageInput";
import './style.css';

const messages = [
    {
        text: 'Tenhle příspěvek je uložený v záložkách. Temporibus ad nihil molestiae eaque officiis ipsum omnis incidunt voluptas nemo esse saepe cum repellendus.',
        likes: 5,
        bookMark: true
    },
    {
        text: 'Tady je text.',
        likes: 0,
        bookMark: false
    },
    {
        text: 'Tady je jiny text.',
        likes: 2,
        bookMark: false
    }
]

const WallWithMessages = () => {
    const [currentMessages, setCurrentMessages] = useState(messages)
    
    const handleMessages = (newMessage) => setCurrentMessages([...currentMessages, {text: newMessage, likes: 0, bookMark: false}])

    return (
        <div className="main">
            <MessageInput onNewMessage={handleMessages}/>
            <MessageList messages={currentMessages}/>
        </div>
    )
}

export default WallWithMessages;