import React, {useState, useEffect} from 'react'
import Message from './Message'
import WebSocketService from '../../services/websocket'

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')

  useEffect(() => {
    WebSocketService.onMessage(message => {
      setMessages(prev => [...prev, message])
    })
  }, [])

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    WebSocketService.sendMessage(input)
    setInput('')
  }

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <Message key={index} text={msg} />
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default ChatBox
