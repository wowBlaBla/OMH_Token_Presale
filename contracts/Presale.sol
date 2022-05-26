// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
// import "@openzeppelin/utils/math/SafeMath.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Presale is Ownable {
    // using SafeMath for uint256;

    IERC20 public tokenAddr;
    IERC20 public usdtAddr;
    AggregatorV3Interface internal priceFeed;

    struct lockingTokenInfo {
        uint256 amount;
        uint256 endLockTimestamp;
    }

    uint256 totalSoldAmount;
    mapping(address => lockingTokenInfo) lockedTokens;

    /**
     * Network: Mumbai
     * Aggregator: MATIC/USD
     * Address: 0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada
     *
     * Network: Polygon Mainnet
     * Aggregator: MATIC/USD
     * Address: 0xAB594600376Ec9fD91F8e885dADF0CE036862dE0
     */
    constructor(address _tokenAddr) {
        tokenAddr = IERC20(_tokenAddr);
        usdtAddr = IERC20(0xA02f6adc7926efeBBd59Fd43A84f4E0c0c91e832);  //0xc2132D05D31c914a87C6611C10748AEb04B58e8F
        priceFeed = AggregatorV3Interface(0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada);
    }

    function _getTokenBalance() internal view returns (uint256) {
        return tokenAddr.balanceOf(address(this));
    }

    function _getSalePeriod() internal view returns (uint) {
        if (block.timestamp >= 1652572800 && block.timestamp < 1660608000) {            // from May 15 until Aug 15
            return 1;   // seed sale period
        } else if (block.timestamp >= 1660608000 && block.timestamp < 1665878400) {     // from Aug 16 until Oct 15
            return 2;   // private sale period
        }

        return 0;
    }

    function getTokenPrice() public view returns (uint256) {
        uint256 tokenBalance = _getTokenBalance() - totalSoldAmount;
        uint tokenSalePeriod = _getSalePeriod();

        if (tokenBalance >= 10000 * 10 ** 18 && tokenBalance <= 10000000 * 10 ** 18) {
            if (tokenSalePeriod == 1) {
                return 6500000;
            } else if (tokenSalePeriod == 2) {
                return 5000000;
            }
        } else if (tokenBalance > 10000000 * 10 ** 18 && tokenBalance <= 20000000 * 10 ** 18) {
            if (tokenSalePeriod == 1) {
                return 8500000;
            } else if (tokenSalePeriod == 2) {
                return 7000000;
            }
        }

        return 0;
    }

    function getLatestPrice() public view returns (int) {
        (
            /*uint80 roundID*/,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();
        return price;
    }

    function _lockToken(uint256 amount) internal {
        require(lockedTokens[msg.sender].amount == 0, "You've already bought!");
        require(amount > 0, "The estimated token amount is zero");
        require(amount < _getTokenBalance() - totalSoldAmount, "Insufficient remain token balance");

        lockedTokens[msg.sender].amount = amount;
        lockedTokens[msg.sender].endLockTimestamp = block.timestamp + (3600 * 24 * 180);
        totalSoldAmount += amount;
    }

    function buyTokenWithMatic() external payable {
        require(_getSalePeriod() > 0, "Not valid sale period");
        require(msg.value > 0, "value cannot be zero");

        uint256 maticPrice = uint256(getLatestPrice());
        uint256 tokenPrice = getTokenPrice();

        require(tokenPrice > 0, "Invalid token price");

        uint256 estimatedAmount = (maticPrice * msg.value) / tokenPrice;
        _lockToken(estimatedAmount);
    }

    function buyTokenWithUSDT(uint256 amountInUSDT) external {
        require(_getSalePeriod() > 0, "Not valid sale period");
        require(amountInUSDT > 0, "amount cannot be zero");
        require(usdtAddr.allowance(msg.sender, address(this)) >= amountInUSDT, "This contract isn't approved for transferFrom of USDT");
        require(usdtAddr.balanceOf(msg.sender) >= amountInUSDT, "Your USDT balance is insufficient");

        usdtAddr.transferFrom(msg.sender, address(this), amountInUSDT);

        uint256 tokenPrice = getTokenPrice();
        require(tokenPrice > 0, "Invalid token price");

        uint256 estimatedAmount = (amountInUSDT * 100) / tokenPrice;
        _lockToken(estimatedAmount);
    }

    function claimToken() external {
        require (lockedTokens[msg.sender].endLockTimestamp <= block.timestamp, "Lock period(6 Month) isn't ended yet");

        uint256 amount = lockedTokens[msg.sender].amount;
        lockedTokens[msg.sender].amount = 0;
        lockedTokens[msg.sender].endLockTimestamp = 0;

        require(_getTokenBalance() >= amount, "Insufficient balance");

        tokenAddr.transfer(msg.sender, amount);
    }

    function withdraw() external onlyOwner {
        address payable owner = payable(owner());
        owner.transfer(address(this).balance);

        uint256 usdt_bal = usdtAddr.balanceOf(address(this));
        if (usdt_bal > 0) {
            usdtAddr.transfer(owner, usdt_bal);
        }
    }

    receive() external payable {}
}
