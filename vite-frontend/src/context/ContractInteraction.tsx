import { createContext, useContext, useEffect, useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import { useAccount } from "wagmi";
import Box from "../../out/Box.sol/Box.json";

const contractContext = createContext<Contract | null>(null);

export function useContract(): Contract | null {
  return useContext(contractContext);
}

interface ContractProviderProps {
  children: React.ReactNode;
}


export function ContractProvider({ children }: ContractProviderProps) {
  const [contract, setContract] = useState<Contract | null>(null);
  useEffect(() => {
    async function createContract() {
      if (window.ethereum) {
        console.log(window.ethereum);
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        const provider = new BrowserProvider(window.ethereum); // ✅ Ethers v6
        const signer = await provider.getSigner();
        const contractInstance = new Contract(
          "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          Box.abi,
          signer
        );
        setContract(contractInstance);
      }
    }
    createContract();
  }, []);
  const { isConnected } = useAccount();
  return (
    <contractContext.Provider value={contract}>
      {children}
    </contractContext.Provider>
  );
}

// export async function getNumber() {
//   return await contract.getNumber();
// }

// export async function setNumber(inputNumber) {
//   return await contract.setNumber(inputNumber);
// }
