import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useContract } from "./context/ContractInteraction";
import { BrowserProvider, Contract } from "ethers";
import Box from "../out/Box.sol/Box.json";
// import { getNumber } from "./context/ContractInteraction";

function App() {
  // const [contract, setContract] = useState();
  const [num, setNum] = useState(11);
  const [inputValue, setInputValue]: any = useState();
  const contract = useContract();

  async function getContractNumber() {
    if (contract) {
      const number = await contract.getNumber();
      setNum(number);
    } else {
      console.log("No contract");
    }

    // console.log(number);
  }

  async function setContractNumber(inputNumber: any) {
    if (contract) {
      const number = await contract.setNumber(inputNumber);
    } else {
      console.log("No contract");
    }
    // console.log(number);
  }

  // async function initializeContracts() {
  // const provider = new BrowserProvider(window.ethereum);
  // const signer = await provider.getSigner();

  // console.log("signer: ", signer);

  // const contractInstance = new Contract(
  //   "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  //   Box.abi,
  //   signer
  // );
  // console.log("contract: ", contractInstance);
  // setContract(contractInstance);
  // }

  return (
    <>
      <button onClick={getContractNumber}>{num}</button>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button onClick={() => setContractNumber(inputValue)}>set</button>
      {/* <button onClick={initializeContracts}>initialize</button> */}
      <ConnectButton></ConnectButton>
    </>
  );
}

export default App;
