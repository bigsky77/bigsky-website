import Link from "next/link";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { formatAddress } from '../lib/helpers'
import CustomModal from '../lib/customModal'
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
      <button type="button" class="text-white bg-cyan-dark border-solid border-2 border-burned-gold hover:bg-blue-800 text-neue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Connect Wallet</button>

    );
}

export default ConnectWallet
