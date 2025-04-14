import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useContract } from "./context/ContractInteraction";
import { BrowserProvider, Contract } from "ethers";
import Box from "../out/Box.sol/Box.json";

function App() {
  // const [contract, setContract] = useState();
  const [num, setNum] = useState(11);
  const [inputValue, setInputValue] = useState();
  const contract = useContract();

  
  //  let contract;
  // useEffect(() => {
  //   contract = useContract();
  // },[]);
  // console.log(contract);
  // useEffect(() => {
    // const provider = new BrowserProvider(window.ethereum);
    // const signer = provider.getSigner();
    // console.log("hello");
    // // Create a new contract instance with the signer
    // const contractInstance = new Contract(
    //   "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    //   Box.abi,
    //   signer
    // );
    // console.log("hello", contractInstance);
    // setContract(contractInstance);
  // }, []);

  async function getContractNumber() {
    const number = await contract.getNumber();
    console.log(number);
    setNum(number);
  }

  async function setContractNumber(inputNumber) {
    const number = await contract.setNumber(inputNumber);
    console.log(number);
  }

  async function initializeContracts() {
    // const provider = new BrowserProvider(window.ethereum);
    // const signer = await provider.getSigner();

    // console.log("signer: ", signer);

    // // Create a new contract instance with the signer
    // const contractInstance = new Contract(
    //   "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    //   Box.abi,
    //   signer
    // );
    // console.log("contract: ", contractInstance);
    // setContract(contractInstance);
  }

  return (
    <>
      <button onClick={getContractNumber}>{num}</button>
      <input onChange={(e) => {setInputValue(e.target.value)}}></input>
      <button onClick={() => setContractNumber(inputValue)}></button>
      <button onClick={initializeContracts}>initialize</button>
      <ConnectButton></ConnectButton>
    </>
  );
}

export default App;
