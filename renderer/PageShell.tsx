import { ComponentChild } from 'preact'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from 'vike/types'
import './PageShell.css'
import { Link } from './Link'

export { PageShell }

function PageShell({ children, pageContext }: { children: ComponentChild; pageContext: PageContext }) {
  return (
    <PageContextProvider pageContext={pageContext}>
      <Layout>
        <Sidebar>
          <Link className="navitem" href="/">
            Home
          </Link>
          <Link className="navitem" href="/about">
            About
          </Link>
        </Sidebar>
        <Content>{children}</Content>
      </Layout>
    </PageContextProvider>
  )
}

function Layout({ children }: { children: ComponentChild }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto'
      }}
    >
      {children}
    </div>
  )
}

function Sidebar({ children }: { children: ComponentChild }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: '1.8em'
      }}
    >
      {children}
    </div>
  )
}

function Content({ children }: { children: ComponentChild }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: '2px solid #eee',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  )
}
