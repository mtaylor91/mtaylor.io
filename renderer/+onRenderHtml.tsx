// https://vike.dev/onRenderHtml
export { onRenderHtml }

import { renderToString } from 'preact-render-to-string'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import type { OnRenderHtmlAsync } from 'vike/types'

const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  const { Page, pageProps } = pageContext
  // This onRenderHtml() hook only supports SSR, see https://vike.dev/render-modes for how to modify
  // onRenderHtml() to support SPA
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  // See https://vike.dev/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Mike Taylor'
  const desc = (documentProps && documentProps.description) || 'Canadian Software Developer'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans" />
        <title>${title}</title>
      </head>
      <body>
        <div id="preact-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    }
  }
}
