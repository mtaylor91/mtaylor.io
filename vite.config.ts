import preact from '@preact/preset-vite';
import vike from 'vike/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [preact(), vike()]
}

export default config
