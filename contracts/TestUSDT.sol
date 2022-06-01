// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestUSDT is ERC20 {

  constructor() ERC20("TestUSDT", "USDT") {
    _mint(msg.sender, 17 * 10**9 * 10**18);
  }

  function decimals() public view override returns (uint8) {
      return 6;
  }
}