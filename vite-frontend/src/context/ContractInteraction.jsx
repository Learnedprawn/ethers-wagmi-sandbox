import { createContext, useContext, useEffect, useState } from "react";
import { ethers, BrowserProvider } from "ethers";
import { useAccount } from "wagmi";
import Box from "../../out/Box.sol/Box.json";

console.log(Box);

const contractContext = createContext();

export function useContract() {
  return useContext(contractContext);
}

export function ContractProvider({ children }) {
  const [contract, setContract] = useState();
  useEffect(() => {
    async function createContract() {
    if (window.ethereum) {
      console.log(window.ethereum);
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      const provider = new BrowserProvider(window.ethereum); // ✅ Ethers v6
      const signer = await provider.getSigner();
      const contractInstance = new ethers.Contract(
        "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        Box.abi,
        signer
      );
      setContract(contractInstance);
    }
    }
    createContract()
  }, []);
  const { isConnected } = useAccount();
  return (
    <contractContext.Provider value={contract}>
      {children}
    </contractContext.Provider>
  );
}
