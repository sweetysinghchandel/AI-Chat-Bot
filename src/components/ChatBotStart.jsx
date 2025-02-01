import React from 'react'
import './ChatBotStart.css'
const ChatBotStart = ({onStartChat}) => {
  return (
    <div className='start-page'>
        <button className="start-page-btn" onClick={onStartChat}> chat Ai</button>

    </div>
  )
}

export default ChatBotStart