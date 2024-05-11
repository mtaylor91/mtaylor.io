import { ComponentChild, createContext } from 'preact'
import { useContext } from 'preact/hooks'

import type IAM from 'iam-mtaylor-io-js'

export { IAMProvider }
export { useIAM }

const Context = createContext<IAM>(undefined as unknown as IAM)

interface IAMProviderProps {
  iam: IAM
  children: ComponentChild
}

function IAMProvider({ iam, children }: IAMProviderProps) {
  return <Context.Provider value={iam}>{children}</Context.Provider>
}

function useIAM() {
  const iam = useContext(Context)
  return iam
}
