const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Presale Test", function () {
  let distributionContract;
  let OMHContract;
  let ceo;
  let user1;
  let user2;
  let block;

  const monthTime = 2628029; // one month per seconds, 259200, 2628029
  const user1Info = [10000,0,1,7,0,true];
  const user2Info = [10000,1,12,3,0,true];

  beforeEach(async function () {
    [ceo, user1, user2, ...addrs] = await ethers.getSigners();

    block = await ethers.provider.getBlock("latest");
    const DistributionContract = await ethers.getContractFactory("Distribution");
    distributionContract = await DistributionContract.deploy(block.timestamp);
    const OMHERC20Contract = await ethers.getContractFactory("OMHERC20");
    OMHContract = await OMHERC20Contract.deploy();

    const ownerBalance = await OMHContract.balanceOf(ceo.address);
    expect(await OMHContract.totalSupply()).to.equal(ownerBalance);
    console.log(1);
    console.log(ownerBalance);
    // set new ticket price
    await distributionContract.connect(ceo).setOMHToken(OMHContract.address);
    expect(await distributionContract.OMHToken()).to.equal(OMHContract.address);
    console.log(2);
    await OMHContract.connect(ceo).transfer(distributionContract.address, ownerBalance);
    console.log(3);
    await distributionContract.connect(ceo).setHolders(
      user1.address,
      user1Info
    );
    await distributionContract.connect(ceo).setHolders(
      user2.address,
      user2Info
    );
  });

  describe("Distribution", function () {
    describe("Success cases", function () {
      it("Should withdrawal", async function () {
        let withdrawalAmountUser1 = await distributionContract.getWithdrawalAmount(user1.address);
        let withdrawalAmountUser2 = await distributionContract.getWithdrawalAmount(user2.address);
        console.log('withdrawalAmountUser1', withdrawalAmountUser1.toString());
        console.log('withdrawalAmountUser2', withdrawalAmountUser2.toString());

        // increase time
        await ethers.provider.send("evm_increaseTime", [monthTime]);
        await ethers.provider.send("evm_mine", []);

        withdrawalAmountUser1 = await distributionContract.getWithdrawalAmount(user1.address);
        withdrawalAmountUser2 = await distributionContract.getWithdrawalAmount(user2.address);
        console.log('withdrawalAmountUser1', withdrawalAmountUser1.toString());
        console.log('withdrawalAmountUser2', withdrawalAmountUser2.toString());

        await distributionContract.connect(user1).withdraw();
        await distributionContract.connect(user2).withdraw();

        // increase time
        await ethers.provider.send("evm_increaseTime", [monthTime]);
        await ethers.provider.send("evm_mine", []);

        withdrawalAmountUser1 = await distributionContract.getWithdrawalAmount(user1.address);
        withdrawalAmountUser2 = await distributionContract.getWithdrawalAmount(user2.address);
        console.log('withdrawalAmountUser1', withdrawalAmountUser1.toString());
        console.log('withdrawalAmountUser2', withdrawalAmountUser2.toString());

        // increase time
        await ethers.provider.send("evm_increaseTime", [monthTime]);
        await ethers.provider.send("evm_mine", []);
        // await distributionContract.connect(ceo).pause(user1.address);
        // getWithdrawableStatus = await distributionContract.getWithdrawableStatus(user1.address);
        // console.log('withdrawable status of user1', getWithdrawableStatus);
        // await distributionContract.connect(ceo).start(user1.address);
        // getWithdrawableStatus = await distributionContract.getWithdrawableStatus(user1.address);
        // console.log('withdrawable status of user1', getWithdrawableStatus);

        withdrawalAmountUser1 = await distributionContract.getWithdrawalAmount(user1.address);
        withdrawalAmountUser2 = await distributionContract.getWithdrawalAmount(user2.address);
        console.log('withdrawalAmountUser1', withdrawalAmountUser1.toString());
        console.log('withdrawalAmountUser2', withdrawalAmountUser2.toString());
        await distributionContract.connect(user1).withdraw();

        // increase time
        await ethers.provider.send("evm_increaseTime", [monthTime]);
        await ethers.provider.send("evm_mine", []);

        withdrawalAmountUser1 = await distributionContract.getWithdrawalAmount(user1.address);
        withdrawalAmountUser2 = await distributionContract.getWithdrawalAmount(user2.address);
        console.log('withdrawalAmountUser1', withdrawalAmountUser1.toString());
        console.log('withdrawalAmountUser2', withdrawalAmountUser2.toString());

        // increase time
        await ethers.provider.send("evm_increaseTime", [monthTime * 12]);
        await ethers.provider.send("evm_mine", []);

        withdrawalAmountUser1 = await distributionContract.getWithdrawalAmount(user1.address);
        withdrawalAmountUser2 = await distributionContract.getWithdrawalAmount(user2.address);
        console.log('withdrawalAmountUser1', withdrawalAmountUser1.toString());
        console.log('withdrawalAmountUser2', withdrawalAmountUser2.toString());
      });
    });
  });
});
