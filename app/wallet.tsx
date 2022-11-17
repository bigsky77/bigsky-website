import Link from "next/link";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { formatAddress } from '../lib/helpers'
import CustomModal from '../lib/customModal'
import WalletModal from '../components/walletModal'
import { connectorsByName, Metamask } from "./connectors";

const ConnectWallet = (props: any) => {   
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const [showDisconnectWalllet, setShowDisconnectWallet] = useState(false);

  const { active, account, activate, deactivate } = useWeb3React();

  useEffect(() => {
    /*
    Reconnect to metamask wallet after refresh if aready connected
    */
    const walletConnectStatus: string =
      localStorage.getItem("walletConnect") || "";

    try {
      if (walletConnectStatus === "true")
        Metamask.isAuthorized().then((isAuthorized: boolean) => {
          if (isAuthorized) {
            activate(Metamask, undefined, true).catch(() => {});
          } else {
            deactivate();
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, []); //eslint-disable-line

  const handleWalletConnect = (currentConnector: any) => {
    activate(currentConnector.connector, (error) => {
      if (error) {
        console.log("error", error);
      }
    });
    if (currentConnector.name === "Metamask")
      localStorage.setItem("walletConnect", "true");
    setShowWalletOptions(false);
  };

  const handleWalletDisconnect = () => {
    deactivate();
    setShowDisconnectWallet(false);
    localStorage.setItem("walletConnect", "false");
  };

  return(
      <div>
        <WalletModal/>
      </div>
    );
}

export default ConnectWallet
