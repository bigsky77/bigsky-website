import Link from "next/link";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { formatAddress } from "../lib/helpers";
import { Web3Provider } from '@ethersproject/providers'

const ConnectWallet = () => {   
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const [showDisconnectWalllet, setShowDisconnectWallet] = useState(false);

  const { active, account, activate, deactivate } = useWeb3React<Web3Provider>();

  return(
    <ConnectWalletContainer class="absolute right-5 top-7 border-double border-burned-gold border-4 font-neue text-burned-gold hover:border-indian-red">
      { active ?  (
        <AddressCont onClick={() => setShowDisconnectWallet(true)}>
          {formatAddress(account)}
        </AddressCont>
      ) : (
        <StyledButton onClick={() => setShowWalletOptions(true)}>
          Connect wallet
        </StyledButton>
      )}
      connect wallet
    </ConnectWalletContainer>
  )
}

export default ConnectWallet
