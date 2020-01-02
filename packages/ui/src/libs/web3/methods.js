import web3 from './config'

export const getDefaultAccount = async () => {
  const account = await web3.eth.getAccounts();
  return account[0];
}

export const instanceContract = abi => {
  // new 
}

export const callContractMethod = async () => {
  // const contractInstance = newContract([methodAbi], defaultAccount);
  // contractInstance.options.address = to;
  // let gas = 0;
  // try {
  //   const gasEstimate = await callContractMethod(
  //     contractInstance,
  //     methodAbi.name,
  //     ...parameters
  //   );
  //   gas = gasEstimate ? gasEstimate * 2 : 1000000;
  //   request.gas = gas;
  //   request.gasLimit = gas + 1000;
  // } catch (error) {
  //   console.log(error);
    // response.send({
    //   status: 400,
    //   message: `Transaction can not be done`,
    //   error
    // });
  // }
  // next();
};