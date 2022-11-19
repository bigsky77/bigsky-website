import type { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import type { Web3ReactHooks } from '@web3-react/core'
import { GnosisSafe } from '@web3-react/gnosis-safe'
import type { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { WalletConnect } from '@web3-react/walletconnect'
import { useCallback, useState } from 'react'
import { CHAINS, getAddChainParameters, URLS } from '../chains'

function ChainSelect({
  chainId,
  switchChain,
  displayDefault,
  chainIds,
}: {
  chainId: number
  switchChain: (chainId: number) => void | undefined
  displayDefault: boolean
  chainIds: number[]
}) {
  return (
    <select class="text-white bg-cyan-blue border border-gray-200 text-neue hover:border-burned-gold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      value={chainId}
      onChange={(event) => {
        switchChain?.(Number(event.target.value))
      }}
      disabled={switchChain === undefined}
    >
      {displayDefault ? <option value={-1}>Select Chain</option> : null}
      {chainIds.map((chainId) => (
        <option key={chainId} value={chainId}>
          {CHAINS[chainId]?.name ?? chainId}
        </option>
      ))}
    </select>
  )
}

export function SwitchChain({
  connector,
  chainId,
  isActivating,
  isActive,
  error,
  setError,
}: {
  connector: MetaMask | WalletConnect | CoinbaseWallet | Network | GnosisSafe
  chainId: ReturnType<Web3ReactHooks['useChainId']>
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>
  isActive: ReturnType<Web3ReactHooks['useIsActive']>
  error: Error | undefined
  setError: (error: Error | undefined) => void
}) {
  const isNetwork = connector instanceof Network
  const displayDefault = !isNetwork
  const chainIds = (isNetwork ? Object.keys(URLS) : Object.keys(CHAINS)).map((chainId) => Number(chainId))

  const [desiredChainId, setDesiredChainId] = useState<number>(isNetwork ? 1 : -1)

  const switchChain = useCallback(
    (desiredChainId: number) => {
      setDesiredChainId(desiredChainId)
      // if we're already connected to the desired chain, return
      if (desiredChainId === chainId) {
        setError(undefined)
        return
      }

      // if they want to connect to the default chain and we're already connected, return
      if (desiredChainId === -1 && chainId !== undefined) {
        setError(undefined)
        return
      }

      if (connector instanceof WalletConnect || connector instanceof Network) {
        connector
          .activate(desiredChainId === -1 ? undefined : desiredChainId)
          .then(() => setError(undefined))
          .catch(setError)
      } else {
        connector
          .activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))
          .then(() => setError(undefined))
          .catch(setError)
      }
    },
    [connector, chainId, setError]
  )

  const onClick = useCallback((): void => {
    setError(undefined)
    if (connector instanceof GnosisSafe) {
      connector
        .activate()
        .then(() => setError(undefined))
        .catch(setError)
    } else if (connector instanceof WalletConnect || connector instanceof Network) {
      connector
        .activate(desiredChainId === -1 ? undefined : desiredChainId)
        .then(() => setError(undefined))
        .catch(setError)
    } else {
      connector
        .activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))
        .then(() => setError(undefined))
        .catch(setError)
    }
  }, [connector, desiredChainId, setError])

  if (error) {
    return (
      <div >
        {!(connector instanceof GnosisSafe) && (
          <ChainSelect
            chainId={desiredChainId}
            switchChain={switchChain}
            displayDefault={displayDefault}
            chainIds={chainIds}
          />
        )}
        <div style={{  }} />
        <button onClick={onClick}>Try Again?</button>
      </div>
    )
  } else if (isActive) {
    return (
      <div >
        {!(connector instanceof GnosisSafe) && (
          <ChainSelect
            chainId={desiredChainId === -1 ? -1 : chainId}
            switchChain={switchChain}
            displayDefault={displayDefault}
            chainIds={chainIds}
          />
        )}
        <div/>
      </div>
    )
  } else {
    return (
      <div >
        {!(connector instanceof GnosisSafe) && (
          <ChainSelect
            chainId={desiredChainId}
            switchChain={isActivating ? undefined : switchChain}
            displayDefault={displayDefault}
            chainIds={chainIds}
          />
        )}
        <div style={{  }} />
      </div>
    )
  }
}


