import Link from "next/link";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { formatAddress } from '../lib/helpers.tsx'
import CustomModal from '../lib/customModal.tsx'
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
    <div class="flex justify-content align-items-center"> 
      { active ? (
         <button class="absolute right-5 top-7 border-double border-burned-gold border-4 font-neue text-burned-gold hover:border-indian-red" onClick={() => setShowDisconnectWallet(true)}>
           {formatAddress(account)} 
        </button> 
    ) : (
        <button class="absolute right-5 top-7 border-double border-burned-gold border-4 w-auto font-neue text-burned-gold hover:border-indian-red" onClick={() => setShowWalletOptions(true)}>
            connect wallet 
        </button>
        )}

        <CustomModal 
          show={showWalletOptions}
          toggleModal={() => setShowWalletOptions(false)}>
            {connectorsByName.map((connector: any, key: number) => {
              const clickCallback = () => handleWalletConnect(connector);
                return (
              <button key={key} onClick={() => clickCallback()}>
                {connector.name}
              </button>
            );
          })}
        </CustomModal>

        <CustomModal
          show={showDisconnectWalllet}
          toggleModal={() => setShowDisconnectWallet(false)}>
          {account}
            <button onClick={() => handleWalletDisconnect()}>
              Disconnect
             </button>
        </CustomModal>
    </div>
  );
}

export default ConnectWallet
