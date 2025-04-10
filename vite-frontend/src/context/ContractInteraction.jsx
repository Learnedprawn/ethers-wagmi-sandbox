import { createContext, useContext, useEffect, useState } from "react";
import { ethers, BrowserProvider } from "ethers";
import { useAccount } from "wagmi";
// import { Box } from "../../out/Box.sol/Box.json";

const contractContext = createContext();

export function useContract() {
  return useContext(contractContext);
}

export function NumProvider({ children }) {
  const [contract, setContract] = useState();
  useEffect(() => {
    if (window.ethereum) {
      console.log(window.ethereum);
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      const provider = new BrowserProvider(window.ethereum); // ✅ Ethers v6
      const signer = provider.getSigner();
      fetch("/out/Box.sol/Box.json")
        .then((res) => res.json())
        .then((data) => {
          const contractInstance = new ethers.Contract(
            process.env.NEXT_PUBLIC_BOX_CONTRACT_ADDRESS,
            data.abi,
            signer
          );
          setContract(contractInstance);
        });

    }
  }, []);
  const { isConnected } = useAccount();
  return <contractContext.Provider value={contract}>{children}</contractContext.Provider>;
}
