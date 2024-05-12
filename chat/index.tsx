import Events from 'events-mtaylor-io-js'
import { useEffect, useState } from 'preact/hooks'
import './Chat.css'


interface Identifier {
  user?: string
  group?: string
  session?: string
}


interface Message {
  message: string
  sender: Identifier
  recipient: Identifier
}


interface ChatProps {
  events: Events
  message: Message
}


export function Chat({ events, message }: ChatProps) {
  const userId: string | undefined = events.socket.user?.id
  if (!userId) {
    return (<p class="error">Not logged in</p>)
  }

  const [messages, setMessages] = useState<Message[]>([message])
  const [messageContents, setMessageContents] = useState<string>('')

  const sender: Identifier = { user: userId }
  const recipient: Identifier = message.sender

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message: Message = JSON.parse(event.data)
      setMessages(messages => [...messages, message])
    }

    events.socket.onMessage(handleMessage)
  }, [events])

  const sendMessage = (event: Event) => {
    event.preventDefault()
    if (!message) return
    events.socket.send({ type: "message", message, recipient, sender })
    setMessageContents('')
  }

  const onChangeMessageContents = (event: Event) => {
    const target = event.target as HTMLInputElement
    setMessageContents(target.value)
  }

  return (
    <div class="chat">
      <ul>
        {messages.map((m, i) => (
          <li key={i}>
            {m.message}
          </li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input type="text" value={messageContents} onChange={onChangeMessageContents} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
