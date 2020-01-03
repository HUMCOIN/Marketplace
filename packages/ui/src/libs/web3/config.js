import Web3 from "web3";

const web3 = new Web3('http://127.0.0.1:8545');

window.web3Provider = web3;

export default web3;