import React, {useState} from "react";
import './style.css';

const MessageInput = ({onNewMessage}) => {
    const [newMessage, setNewMessage] = useState('')
    
    const handleChange = (e) => setNewMessage(e.target.value)
    const handleMessage = () => onNewMessage(newMessage)
    
    return (
        <div className="post">
				<form className="post__form">
					<textarea name="post-message" id="post-message" rows="4" className="post__message" value={newMessage} onChange={handleChange} placeholder="Řekni, co se děje?"></textarea>
				</form>
				<div className="post__actions">
					<button className="button" onClick={handleMessage}>Zacvrlikej to</button>
				</div>
			</div>
    )
}

export default MessageInput;