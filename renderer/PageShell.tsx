import { ComponentChild } from 'preact'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from 'vike/types'
import './PageShell.css'

export { PageShell }

function PageShell({ children, pageContext }: { children: ComponentChild; pageContext: PageContext }) {
  return (
    <PageContextProvider pageContext={pageContext}>
      <Content>{children}</Content>
    </PageContextProvider>
  )
}

function Content({ children }: { children: ComponentChild }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingBottom: 50,
        minHeight: '100vh',
        color: '#ffffff',
        backgroundColor: '#000000',
      }}
    >
      {children}
    </div>
  )
}
