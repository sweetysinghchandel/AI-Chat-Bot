import React, { useState } from 'react'
import ChatBotStart from './components/ChatBotStart'
import ChatBotApp from './components/ChatBotApp'
const App = () => {
  const [isChatting , setIsChatting] = useState(false)

  const handleStartChat = () => {
    setIsChatting(true)
  }
  const handleGoBack = () =>{
    setIsChatting(false)
  }
  return (
    <div className="Container">
      {isChatting ?(
        <ChatBotApp onGoBack={handleGoBack}/>
      ) :(
        <ChatBotStart onStartChat={handleStartChat}/>
      )
      }
    </div>
  )
}

export default App
        
