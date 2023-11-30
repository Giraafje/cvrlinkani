import React from "react";
import './style.css';
import woman2 from '../../assets/avatars/woman2.jpg'
import heart from '../../assets/icons/heart.svg'
import bookmarkActive from '../../assets/icons/bookmark-active.svg'
import trash from '../../assets/icons/trash.svg'


const Message = () => {
   return (
    <article className="message">
        <div className="message__avatar">
            <img src={woman2} alt=""/>
        </div>
        <div className="message__content">
            <header className="message__header">
                <span className="message__name">Jana Novotná</span>
                <span className="message__handle">@janicka</span>
                <span className="message__time">1d</span>
            </header>
            <div className="message__text">
                Tenhle příspěvek je uložený v záložkách. Temporibus ad nihil molestiae eaque officiis ipsum omnis incidunt voluptas nemo esse saepe cum repellendus.
            </div>
            <footer className="message__footer">
                <button className="icon-button icon-button--red">
                    <span className="icon-button__icon"><img src={heart} alt="Miluju to"/></span>
                    123
                </button>
                <button className="icon-button icon-button--blue">
                    <span className="icon-button__icon"><img src={bookmarkActive} alt="Uložit do záložek"/></span>
                    Přidat do záložek
                </button>
                <button className="icon-button icon-button--red">
                    <span className="icon-button__icon"><img src={trash} alt="Smazat zprávu"/></span>
                    Smazat zprávu
                </button>
            </footer>
        </div>
    </article>
    )
};

export default Message;