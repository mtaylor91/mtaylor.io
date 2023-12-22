import { FunctionComponent } from 'preact'
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

type Page = FunctionComponent<PageProps>
type PageProps = Record<string, unknown>
