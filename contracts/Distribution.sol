// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./OMHERC20.sol";

contract Distribution {
  using SafeERC20 for IERC20;

  struct OMH {
    uint256 percent;
    uint256 startAfter;
    uint256 months;
    uint256 numOfTimes;
    uint256 numOfWithdraws;
    bool status;
  }

  address public OMHToken;
  address public admin1 = 0xf98E4c178EeD9313Ce0856cf775ce950C08d6F39;
  address public admin2 = 0xD6F6c0c0270F1001fbd0583cA40Cc4b7a40529B0;
  address public deployer;

  uint256 public startDate;
  uint256 public periodInSecond = 2628029;  // 2628029: one month per seconds

  mapping (address => OMH) public holders;

  event Withdraw(
    address indexed caller,
    uint256 amount,
    uint256 withdrawDate
  );

  modifier onlyAdminGroup {
    require((msg.sender == admin1) || (msg.sender == admin2), "caller is not admin");
    _;
  }

  modifier onlyAdmin1 {
    require(msg.sender == admin1, "caller is not admin1");
    _;
  }

  modifier onlyAdmin2 {
    require(msg.sender == admin2, "caller is not admin2");
    _;
  }

  modifier onlyDeployer {
    require(msg.sender == deployer, "caller is not deployer");
    _;
  }

  constructor(uint256 _startDate) {
    startDate = _startDate;
    deployer = msg.sender;
  }

  function withdraw() external {
    require(holders[msg.sender].percent > uint256(0), "invalid holder");
    require(holders[msg.sender].status == true, "caller can't withdraw");

    (uint256 num, uint256 withdrawalAmount) = getWithdrawalAmount(msg.sender);
    require(num > uint256(0), "not time to withdraw or caller has already all withdrawn");

    IERC20(OMHToken).safeTransfer(msg.sender, withdrawalAmount);
    holders[msg.sender].numOfWithdraws += num;

    emit Withdraw(msg.sender, withdrawalAmount, block.timestamp);
  }

  function getWithdrawableStatus(address _holder) public view returns (bool) {
    return holders[_holder].status;
  }

  function getWithdrawalAmount(address _holder) public view returns (uint256, uint256) {
    OMH memory _info = holders[_holder];

    if (_info.percent == uint256(0) || _info.numOfWithdraws >= _info.numOfTimes) {
      return (uint256(0), uint256(0));
    }

    uint256 num = 1;
    
    uint256 withdrawTime = startDate + periodInSecond * (_info.startAfter + _info.months * _info.numOfWithdraws);
    if (block.timestamp < withdrawTime) {
      return (uint256(0), uint256(0));
    } else {
      num += (block.timestamp - withdrawTime) / periodInSecond / _info.months;
    }

    if (num > _info.numOfTimes - _info.numOfWithdraws) {
      num = _info.numOfTimes - _info.numOfWithdraws;
    }

    uint256 withdrawalAmount = IERC20(OMHToken).totalSupply() * _info.percent * num / 1_000_000;
    
    return (num, withdrawalAmount);
  }

  function changeAdmin1(address _newAdmin1) external onlyAdmin1() {
    admin1 = _newAdmin1;
  }

  function changeAdmin2(address _newAdmin2) external onlyAdmin2() {
    admin2 = _newAdmin2;
  }

  function changeDeployer(address _newDeployer) external onlyDeployer() {
    deployer = _newDeployer;
  }

  function changeStartDate(uint256 _newDate) external onlyDeployer() {
    startDate = _newDate;
  }

  function changePeriod(uint256 _newPeriod) external onlyDeployer() {
    periodInSecond = _newPeriod;
  }

  function setOMHToken(address _newToken) external onlyDeployer() {
    OMHToken = _newToken;
  }

  function setHolders(address _user, OMH memory _newSet) external onlyDeployer() {
    holders[_user] = _setDist(_newSet);
  }

  function pause(address _user) external onlyAdminGroup() {
    holders[_user].status = false;
  }

  function start(address _user) external onlyAdminGroup() {
    holders[_user].status = true;
  }

  function _setDist(OMH memory _newSet) private pure returns (OMH memory) {
    return OMH({
      percent: _newSet.percent,
      startAfter: _newSet.startAfter,
      months: _newSet.months,
      numOfTimes: _newSet.numOfTimes,
      numOfWithdraws: _newSet.numOfWithdraws,
      status: _newSet.status
    });
  }
}
