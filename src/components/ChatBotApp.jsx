import React from "react";
import './ChatBotApp.css';
const ChatBotApp = () => {
  return (
    <div className="chat-app">
      <div className="chat-list">
        <div className="chat-list-header">
          <h2>Chat List</h2>
          <i className="bx bx-edit-alt new-chat"></i>
        </div>
        <div className="chat-list-item active">
          <h4>chat 28/01/2025 3:17:30pm</h4>
          <i className="bx bx-x-circle"></i>
        </div>
        <div className="chat-list-item">
          <h4>chat 28/01/2025 3:17:30pm</h4>
          <i className="bx bx-x-circle"></i>
        </div>
        <div className="chat-list-item">
          <h4>chat 28/01/2025 3:17:30pm</h4>
          <i className="bx bx-x-circle"></i>
        </div>
      </div>
      <div className="chat-window">
        <div className="chat-title">
          <h3>chat with AI</h3>
          <i className="bx bx-arrow-back arrow"></i>
        </div>
        <div className="chat">
          <div className="prompt">
            Hi , how are you?
            <span>3:17:30pm</span>
          </div>

          <div className="response">
            Hello! I'm just a computer program , so , I don't have feelings, but
            I'm here and ready to assist you? How can I help you today?
            <span>3:17:30pm</span></div>
          <div className="typing">Typing</div>
        </div>
        <form className="msg-form">
        <i className="fa-solid fa-face smile emoji"></i>
        <input type="text" className="msg-input"  placeholder="Type a message...."/>
        <i className="fa-solidfa-paper-plane"></i>
        </form>
      </div>
    </div>
  );
};

export default ChatBotApp;
