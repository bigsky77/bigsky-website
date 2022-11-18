import type { AppProps } from 'next/app'
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { coinbaseWallet, hooks as coinbaseWalletHooks } from '../app/connectors/coinbaseWallet'
import { hooks as metaMaskHooks, metaMask } from '../app/connectors/metaMask'
import { hooks as networkHooks, network } from '../app/connectors/network'
import { hooks as walletConnectHooks, walletConnect } from '../app/connectors/walletConnect'
import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { WalletConnect } from '@web3-react/walletconnect'
import { getName } from '../utils'

const connectors: [MetaMask | WalletConnect | CoinbaseWallet | Network, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [network, networkHooks],
]

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Web3ReactProvider connectors={connectors}>
       <Component {...pageProps} />
       <Analytics/>
      </Web3ReactProvider>
    </>
  )
}

