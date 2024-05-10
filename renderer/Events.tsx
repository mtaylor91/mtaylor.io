import { ComponentChild, createContext } from 'preact'
import { useContext } from 'preact/hooks'

import type Events from 'events-mtaylor-io-js'

export { EventsProvider }
export { useEvents }

const Context = createContext<Events>(undefined as unknown as Events)

interface EventsProviderProps {
  events: Events
  children: ComponentChild
}

function EventsProvider({ events, children }: EventsProviderProps) {
  return <Context.Provider value={events}>{children}</Context.Provider>
}

function useEvents() {
  const events = useContext(Context)
  return events
}
