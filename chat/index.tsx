import { useEffect, useState } from 'preact/hooks'


export function Chat({ socket }: { socket: Socket }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    socket.userHandlers.set(socket.user.id, [event => {
      const message: Message = JSON.parse(event.data)
      setMessages(messages => [...messages, message])
    }])
  }, [socket])

  const sendMessage = () => {
    if (!message) return
    const messageData = { type: "message", message, recipient: { user: socket.user.id } }
    socket.send(JSON.stringify(messageData))
    setMessage('')
  }

  if (messages.length < 1) {
    return false
  }

  return (
    <div class="chat" style={{
      position: 'fixed',
      bottom: 0,
      right: 0,
      margin: 10,
      padding: 10,
      flexBasis: '1px',
      alignSelf: 'flex-end',
    }}>
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
          overflowY: 'auto',
        }}
      >
        {messages.map((message, i) => (
          <li key={i} style={{
            padding: 10,
          }}>
            {message.message}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}
