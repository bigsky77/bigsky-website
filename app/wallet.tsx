import Link from "next/link";
import { useEffect, useState } from "react";

const ConnectWallet = (props: any) => {   
  
  const [result, showResult] = useState(false);
  
  const connectMetamask = async () => {
   
  }

  return(
    <div>
         <button class="absolute right-5 top-7 border-double border-burned-gold border-4 font-neue text-burned-gold hover:border-indian-red" onClick={connectMetamask}>
            connect wallet 
        </button> 
    </div>
  )
}

export default ConnectWallet
