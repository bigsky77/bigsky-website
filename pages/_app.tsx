import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { Web3ReactProvider } from '@web3-react/core'
import * as ReactDOM from 'react-dom';
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  return library
}

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>    
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
      <Analytics/>
    </Web3ReactProvider>
  </>
  )
}
