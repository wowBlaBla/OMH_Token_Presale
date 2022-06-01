const hre = require("hardhat");

async function main() {
  // // We get the contract to deploy
  // const Distribution = await hre.ethers.getContractFactory("Distribution");
  // // 1652572800 is startDate (Sun May 15 2022 00:00:00 UTC+0)
  // // 1652313600 is test start date (GMT): Thursday, May 12, 2022 12:00:00 AM
  // const distribution = await Distribution.deploy(1652572800);
  // // 0x7D686Ff7a4d436Ed10675A7F0E83Fd41477b0717
  // await distribution.deployed();
  // console.log("Distribution deployed to:", distribution.address);

  // const OMHERC20 = await hre.ethers.getContractFactory("OMHERC20");
  // const ERC20 = await OMHERC20.deploy();
  // 0x7D686Ff7a4d436Ed10675A7F0E83Fd41477b0717
  // await ERC20.deployed();

  // console.log("OMHERC20 deployed to:", ERC20.address);
  // const OMHERC20 = await hre.ethers.getContractFactory("OMHERC20");
  // const ERC20 = await OMHERC20.deploy();
  // await ERC20.deployed();
  // console.log("OMH deployed to:", ERC20.address);

  // const USDTToken = await hre.ethers.getContractFactory("TestUSDT");
  // const USDT = await USDTToken.deploy();
  // await USDT.deployed();
  // console.log("USDT deployed to:", USDT.address);

  const PresaleContract = await hre.ethers.getContractFactory("Presale");
  // const Presale = await PresaleContract.deploy(ERC20.address, USDT.address, "0x7794ee502922e2b723432DDD852B3C30A911F021");
  const Presale = await PresaleContract.deploy("0x6c4544017B681CCFa5255143610385FEd3A0a445", "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0");
  await Presale.deployed();
  console.log("Presale deployed to:", Presale.address);

  // await distribution.setOMHToken("0x6c4544017B681CCFa5255143610385FEd3A0a445");
  // await distribution.setHolders("0xf98E4c178EeD9313Ce0856cf775ce950C08d6F39", [22000,0,3,5,0,true]);
  // await distribution.setHolders("0xD6F6c0c0270F1001fbd0583cA40Cc4b7a40529B0", [22000,0,3,5,0,true]);
  // await distribution.setHolders("0x1BFb45f6aBE6653262dfbcA872aE043F1DB6ce2D", [100,0,3,2,0,true]);
  // await distribution.setHolders("0x9b786d161ACA544dd8119F172fd511557ecB529c", [1960,0,3,5,0,true]);
  // await distribution.setHolders("0x54a7760A3CD586Ee156d25A969AaaC61C0762afE", [10000,3,12,3,0,true]);
  // await distribution.setHolders("0x0D415ABdd265bDa3356A848ce891EfcF57aaF665", [100000,0,1,1,0,true]);
  // await distribution.setHolders("0x438318655Df25a9c50266e453BcC6b9aaFfE7c78", [140000,3,1,1,0,true]);
  // await distribution.setHolders("0x1B4942F4366794e77240A1ED935818B305c8477c", [10000,5,1,10,0,true]);
  // await distribution.setHolders("0x31DB7dC50C4077AA065F5C296A766b1A6Db56df2", [50000,5,1,1,0,true]);
  // await distribution.setHolders("0x7a7D8Aa540617D82Cbb045A8E1C38E8336b7AfA4", [50000,5,1,1,0,true]);
  // await distribution.setHolders("0x4f9dA123154CeCDB9eF312662d1B134625323384", [10000,5,1,1,0,true]);
  // await distribution.setHolders("0x81e56bE700151DB398619c76A86BE1985bd69731", [290000,0,1,1,0,true]);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
