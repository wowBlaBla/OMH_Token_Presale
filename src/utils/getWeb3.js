import Web3 from "web3";

/**
 * Load Web3.js
 */
const getWeb3 = () =>
  new Promise(async (resolve, reject) => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        // Acccounts now exposed
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      // Use Mist/MetaMask's provider.
      const web3 = window.web3;
      // console.log("Injected web3 detected.");
      resolve(web3);
    }
    else {
      alert("Please install Metamask on your browser");
    }
  });


export default getWeb3;
