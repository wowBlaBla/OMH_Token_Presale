import { createContext } from "react";

const Web3Context = createContext({
	web3: null,
	chainId: null,
	account: null,
	omhContract: null,
	presaleContract: null,
	loadWeb3: async () => {},
	unloadWeb3: async () => {}
});


export default Web3Context;
