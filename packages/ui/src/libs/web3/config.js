import Web3 from "web3";

class Provider extends Web3 {
  constructor() {
    super()
    this.loadProvider();
  }

  async loadProvider() {
    if (window.ethereum) {
      await window.ethereum.enable();
      this.setProvider(window.ethereum);
    }

    if (web3.eth.defaultAccount) {
      this.setProvider(window.web3.currentProvider)
    }
  }
}

const web3 = new Provider();
window.web3Provider = web3;

export default web3;
