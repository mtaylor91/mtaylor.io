// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vike.dev/pageContext-anywhere

import { ComponentChild, createContext } from 'preact'
import { useContext } from 'preact/hooks'
import type { PageContext } from 'vike/types'

export { PageContextProvider }
export { usePageContext }

const Context = createContext<PageContext>(undefined as unknown as PageContext)

function PageContextProvider({ pageContext, children }: { pageContext: PageContext; children: ComponentChild }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

function usePageContext() {
  const pageContext = useContext(Context)
  return pageContext
}
