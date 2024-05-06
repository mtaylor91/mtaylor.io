import { useEffect, useState } from 'preact/hooks'


export function Chat({ socket }: { socket: Socket }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [message, setMessage] = useState<string>('')
  const [recipient, setRecipient] = useState<string>('')

  const handleMessage = (event: MessageEvent) => {
    const message: Message = JSON.parse(event.data)
    setMessages(messages => [...messages, message])
    setRecipient(message.sender.user)
  }

  useEffect(() => {
    socket.onSessionMessage(handleMessage)
    socket.onUserMessage(handleMessage)
  }, [handleMessage, socket, setMessages, setRecipient])

  const sendMessage = () => {
    if (!message) return
    socket.send(JSON.stringify({
      type: "message",
      message,
      recipient: { user: recipient },
      sender: { user: socket.user.id },
    }))
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
