import web3 from "./config";
import { fromWei } from "./util";

const BN = require('bn.js')
const scheme = {
  Project: require("./abi/Project"),
  ProjectFactory: require("./abi/ProjectFactory"),
  ProjectHandler: require("./abi/ProjectHandler")
};

export const getDefaultAccount = async () => {
  const account = await web3.eth.getAccounts();
  return account[0];
};

export const toEther = amount => {
  return fromWei(amount.toString(), "ether");
};

export const getTransactionNumber = async account => {
  return await web3.eth.getTransactionCount(account);
};

export const instanceContract = async contractName => {
  const from = await getDefaultAccount();
  return new web3.eth.Contract(scheme[contractName].abi, { from });
};

export const sendContract = async (contactInstance, method, gas, ...parameters) => {
  const from = await getDefaultAccount();
  const nonce = await getTransactionNumber(from);
  const send = (resolve, reject) => {
    contactInstance.methods[method](...parameters)
      .send({ from, nonce, gas, })
      .on("confirmation", (_, receipt) => {
        resolve(receipt);
      })
      .on("error", error => {
        reject(error);
      });
  };
  return new Promise(send);
};

export const callContract = async (contactInstance, method, gas, ...parameters) => {
  const from = await getDefaultAccount();
  const nonce = await getTransactionNumber(from);
  const call = (resolve, reject) => {
    contactInstance.methods[method](...parameters).call({ from, nonce, gas }, (error, result) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      resolve(result);
    });
  };
  return new Promise(call);
};

export const gasCalculator = (contractInstance, method, ...parameters) => {
  const getGas = async (resolve, reject) => {
    try {
      const from = await getDefaultAccount();
      const gasEstimation = await contractInstance.methods[method](...parameters).estimateGas({ from });
      resolve(gasEstimation);
    } catch (error) {
      reject(error);
    }
  };
  return new Promise(getGas);
};

export const tryContract = async (contractInstance, method, ...parameters) => {
  let gas = 0;
  try {
    const gasEstimate = await gasCalculator(contractInstance, method, ...parameters);
    console.log(gasEstimate)
    gas = gasEstimate ? gasEstimate * 2 : 1000000;
    return new BN(Math.min(1000000, gas))
  } catch (error) {
    console.log(error);
  }
};
