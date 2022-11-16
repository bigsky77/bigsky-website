import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import * as ReactDOM from 'react-dom';

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>    
      <Component {...pageProps} />
      <Analytics/>
  </>
  )
}
