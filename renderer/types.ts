import { Component } from 'preact'
export type { PageProps }

// https://vike.dev/pageContext#typescript
declare global {
  namespace Vike {
    interface PageContext {
      Page: Page
      pageProps?: PageProps
      urlPathname: string
      exports: {
        documentProps?: {
          title?: string
          description?: string
        }
      }
    }
  }
}

type Page = (pageProps: PageProps) => Component
type PageProps = Record<string, unknown>
