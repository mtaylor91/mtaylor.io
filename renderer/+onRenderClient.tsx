// https://vike.dev/onRenderClient
export { onRenderClient }

import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import type { OnRenderClientAsync } from 'vike/types'

import { getOrCreateClient } from '../socket'

// This onRenderClient() hook only supports SSR, see https://vike.dev/render-modes for how to modify onRenderClient()
// to support SPA
const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  const root = document.getElementById('preact-root')
  if (!root) throw new Error('DOM element #preact-root not found')
  const client = await getOrCreateClient()
  client.send('ce01f0a4-27ff-4bfe-bd5a-4140567fba9f', 'onRenderClient', new Uint8Array())
  hydrateRoot(
    root,
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
}
