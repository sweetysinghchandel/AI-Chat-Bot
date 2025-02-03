import React, { useState } from 'react'
import ChatBotStart from './components/ChatBotStart'
import ChatBotApp from './components/ChatBotApp'
const App = () => {
  const [isChatting , setIsChatting] = useState(false)
  const [chats , setChats] = useState([])

  const handleStartChat = () => {
    setIsChatting(true)

    if(chats.length === 0) {
      const newChat = {
        id:`chat ${new Date().toLocalDateString
        ("en-GB")} ${new Date().toLocalTimeString()}` ,messages :[] ,
      }
      setChats([newChat])
    }
  }
  const handleGoBack = () =>{
    setIsChatting(false)
  }
  return (
    <div className="Container">
      {isChatting ?(
        <ChatBotApp onGoBack={handleGoBack} chats={chats} setChats={setChats}/>
      ) :(
        <ChatBotStart onStartChat={handleStartChat}/>
      )
      }
    </div>
  )
}

export default App
        
