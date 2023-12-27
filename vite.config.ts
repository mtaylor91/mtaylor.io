import preact from '@preact/preset-vite';
import vike from 'vike/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [preact(), vike()],
  server: {
    proxy: {
      '/api/v1/socket': {
        ws: true,
        target: 'ws://localhost:8080',
        timeout: 60000,
        proxyTimeout: 60000,
        changeOrigin: true,
      },
    },
  },
}

export default config
