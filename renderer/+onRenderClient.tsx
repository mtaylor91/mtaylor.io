// https://vike.dev/onRenderClient
export { onRenderClient }

import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import { EventsProvider } from './Events'
import type { OnRenderClientAsync } from 'vike/types'
import Events from 'events-mtaylor-io-js'
import IAM from 'iam-mtaylor-io-js'


const GUEST_LOGIN_ID: string = "guest"
const GUEST_LOGIN_SECRET: string = "R973mcAR3ZZoMZdeqbCkknep46heMJJWYefYA86K_ckh27IVU-xeNaXBMi8AySbam39NNwrbjVp2yNAXlnK4Vg=="


const iam = new IAM()
const events = new Events(iam)


const connectClient = async () => {
  await iam.login(GUEST_LOGIN_ID, GUEST_LOGIN_SECRET)
  await events.connect()
}


// This onRenderClient() hook only supports SSR, see https://vike.dev/render-modes for how to modify onRenderClient()
// to support SPA
const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  const root = document.getElementById('preact-root')
  if (!root) throw new Error('DOM element #preact-root not found')

  connectClient()
  hydrateRoot(
    root,
    <EventsProvider events={events}>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </EventsProvider>
  )
}
