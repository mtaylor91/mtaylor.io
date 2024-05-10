import { ComponentChild } from 'preact'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from 'vike/types'
import './PageShell.css'

export { PageShell }
export type { PageShellProps }

interface PageShellProps {
  children: ComponentChild
  pageContext: PageContext
}

function PageShell({ children, pageContext }: PageShellProps) {
  return (
    <PageContextProvider pageContext={pageContext}>
      <Content>{children}</Content>
    </PageContextProvider>
  )
}

function Content({ children }: { children: ComponentChild }) {
  return (
    <>
      <div class="page-shell">
        {children}
      </div>
    </>
  )
}
