// https://vike.dev/onRenderClient
export { onRenderClient }
import sodium from 'libsodium-wrappers-sumo'
import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import { EventsProvider } from './Events'
import { IAMProvider } from './IAM'
import type { OnRenderClientAsync } from 'vike/types'
import Events from 'events-mtaylor-io-js'
import IAM from 'iam-mtaylor-io-js'


const ANALYTICS_TOPIC: string = "95e990d4-e445-4649-a28b-bfa3834c1408"
const GUEST_LOGIN_ID: string = "guest"
const GUEST_LOGIN_SECRET: string = "R973mcAR3ZZoMZdeqbCkknep46heMJJWYefYA86K_ckh27IVU-xeNaXBMi8AySbam39NNwrbjVp2yNAXlnK4Vg=="


const iam = new IAM()
const events = new Events(iam)


const initSession = async () => {
  const sessionId = window.localStorage.getItem('sessionId')
  const sessionToken = window.localStorage.getItem('sessionToken')

  await sodium.ready

  if (sessionId && sessionToken) {
    try {
      await iam.refresh(GUEST_LOGIN_ID, GUEST_LOGIN_SECRET, sessionId, sessionToken)
      console.log('Session refreshed:', iam.sessionId)
    } catch (error) {
      console.log('Failed to refresh session:', error)
      await iam.login(GUEST_LOGIN_ID, GUEST_LOGIN_SECRET)
      console.log('Session created:', iam.sessionId)
    }
  } else {
    await iam.login(GUEST_LOGIN_ID, GUEST_LOGIN_SECRET)
    console.log('Session created:', iam.sessionId)
  }

  if (iam.sessionId && iam.sessionToken) {
    window.localStorage.setItem('sessionId', iam.sessionId)
    window.localStorage.setItem('sessionToken', iam.sessionToken)
  }

  events.publish(ANALYTICS_TOPIC, { data: {
    event: 'pageview',
    session: iam.sessionId,
    address: iam.sessionAddress,
    path: window.location.pathname,
    referrer: document.referrer,
  }})
}


// This onRenderClient() hook only supports SSR, see https://vike.dev/render-modes for how to modify onRenderClient()
// to support SPA
const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  const root = document.getElementById('preact-root')
  if (!root) throw new Error('DOM element #preact-root not found')

  initSession()
  hydrateRoot(
    root,
    <EventsProvider events={events}>
      <IAMProvider iam={iam}>
        <PageShell pageContext={pageContext}>
          <Page {...pageProps} />
        </PageShell>
      </IAMProvider>
    </EventsProvider>
  )
}
