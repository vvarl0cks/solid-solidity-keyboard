import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x2e10a37528c919EB126E0679B536544655dA8617';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}