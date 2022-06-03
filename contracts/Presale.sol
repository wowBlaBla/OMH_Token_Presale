// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Presale {
    using SafeERC20 for IERC20;

    struct lockingTokenInfo {
        uint256 amount;
        uint256 endLockTimestamp;
    }

    uint256 public totalSoldAmount;

    mapping(address => lockingTokenInfo) public lockedTokens;

    AggregatorV3Interface internal priceFeed;

    IERC20 public tokenAddr;
    IERC20 public usdtAddr;

    uint256 public seedPriceForRound1 = 6500000;            // $0.065
    uint256 public seedPriceForRound2 = 5000000;            // $0.05
    uint256 public privatePriceForRound1 = 8500000;         // $0.085
    uint256 public privatePriceForRound2 = 7000000;         // $0.07

    uint256 public ROUND1_MIN_AMOUNT = 10000;
    uint256 public ROUND2_MIN_AMOUNT = 10**7;
    uint256 public ROUND2_MAX_AMOUNT = 2 * 10**7;
    uint256 public LOCKING_PERIOD = 6;                      // 6 months

    uint256 public seedStartDate = 1652572800;              // May 15, 2022 12:00:00 AM GMT
    uint256 public seedEndDate = 1660608000;                // Aug 16, 2022 12:00:00 AM GMT
    uint256 public privateEndDate = 1665878400;             // Oct 16, 2022 12:00:00 AM GMT

    address payable public lpWallet = payable(0x31DB7dC50C4077AA065F5C296A766b1A6Db56df2);
    address payable public devWallet = payable(0xb43B73b8a6E848ae82E689736E77d53E9Ee0858d);
    address payable public marketWallet = payable(0x1B4942F4366794e77240A1ED935818B305c8477c);
    address payable public cfWallet1 = payable(0xf98E4c178EeD9313Ce0856cf775ce950C08d6F39);
    address payable public cfWallet2 = payable(0xD6F6c0c0270F1001fbd0583cA40Cc4b7a40529B0);
    address payable public cfWallet3 = payable(0x6cF00e5e99E6707057A6471b2B4B803791D8f20b);

    address public deployer;

    event Buy(address indexed caller, uint8 paymentType, uint256 paidAmount, uint256 tokenAmount, uint256 buyDate);
    event Claim(address indexed caller, uint256 tokenAmount, uint256 claimDate);

    modifier onlyAdminGroup {
        require((msg.sender == cfWallet1) || (msg.sender == cfWallet2) || (msg.sender == cfWallet3), "caller is not admin");
        _;
    }

    modifier onlyCFWallet1 {
        require(msg.sender == cfWallet1, "caller is not cfWallet1");
        _;
    }

    modifier onlyCFWallet2 {
        require(msg.sender == cfWallet2, "caller is not cfWallet2");
        _;
    }

    modifier onlyCFWallet3 {
        require(msg.sender == cfWallet3, "caller is not cfWallet3");
        _;
    }

    modifier onlyDevWallet {
        require(msg.sender == devWallet, "caller is not devWallet");
        _;
    }

    modifier onlyLPWallet {
        require(msg.sender == lpWallet, "caller is not lpWallet");
        _;
    }

    modifier onlyMarketWallet {
        require(msg.sender == marketWallet, "caller is not marketWallet");
        _;
    }

    modifier onlyDeployer {
        require(msg.sender == deployer, "caller is not deployer");
        _;
    }

    /**
     * Network: Mumbai
     * Aggregator: MATIC/USD
     * Address: 0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada
     *
     * Network: Polygon Mainnet
     * Aggregator: MATIC/USD
     * Address: 0xAB594600376Ec9fD91F8e885dADF0CE036862dE0
     */
    constructor(address _tokenAddr, address _usdtAddr, address _priceFeedAddr) {
        tokenAddr = IERC20(_tokenAddr);                     // OMH:         0x6c4544017B681CCFa5255143610385FEd3A0a445
        usdtAddr = IERC20(_usdtAddr);                       // USDT:        0xc2132D05D31c914a87C6611C10748AEb04B58e8F
        priceFeed = AggregatorV3Interface(_priceFeedAddr);  // MATIC/USD:   0xAB594600376Ec9fD91F8e885dADF0CE036862dE0
        deployer = msg.sender;
    }

    function setTokenAddress(address _newToken) external onlyDeployer {
        tokenAddr = IERC20(_newToken);
    }

    function setUSDTAddress(address _newToken) external onlyDeployer {
        usdtAddr = IERC20(_newToken);
    }

    function setSeedPriceForRound1(uint256 _newPrice) external onlyDeployer {
        seedPriceForRound1 = _newPrice;
    }

    function setSeedPriceForRound2(uint256 _newPrice) external onlyDeployer {
        seedPriceForRound2 = _newPrice;
    }

    function setPrivatePriceForRound1(uint256 _newPrice) external onlyDeployer {
        privatePriceForRound1 = _newPrice;
    }

    function setPrivatePriceForRound2(uint256 _newPrice) external onlyDeployer {
        privatePriceForRound2 = _newPrice;
    }

    function setSeedStartDate(uint256 _newDate) external onlyDeployer {
        seedStartDate = _newDate;
    }

    function setSeedEndDate(uint256 _newDate) external onlyDeployer {
        seedEndDate = _newDate;
    }

    function setPrivateEndDate(uint256 _newDate) external onlyDeployer {
        privateEndDate = _newDate;
    }

    function setLPWallet(address payable _newAddress) external onlyLPWallet {
        lpWallet = _newAddress;
    }

    function setDevWallet(address payable _newAddress) external onlyDevWallet {
        devWallet = _newAddress;
    }

    function setMarketWallet(address payable _newAddress) external onlyMarketWallet {
        marketWallet = _newAddress;
    }

    function setCFWallet1(address payable _newAddress) external onlyCFWallet1 {
        cfWallet1 = _newAddress;
    }

    function setCFWallet2(address payable _newAddress) external onlyCFWallet2 {
        cfWallet2 = _newAddress;
    }

    function setCFWallet3(address payable _newAddress) external onlyCFWallet3 {
        cfWallet3 = _newAddress;
    }

    function setDeployer(address _newAddress) external onlyDeployer {
        deployer = _newAddress;
    }

    function _lockToken(uint256 _amount, address _sender) internal {
        require(lockedTokens[_sender].amount == 0, "You've already bought!");
        require(_amount > 0, "The estimated token amount couldn't be zero");
        require(_amount <= _getTokenBalance() - totalSoldAmount, "Insufficient remain token balance");

        lockedTokens[_sender].amount = _amount;
        lockedTokens[_sender].endLockTimestamp = block.timestamp + (2628029 * LOCKING_PERIOD);
        totalSoldAmount += _amount;
    }
    
    function _getTokenBalance() public view returns (uint256) {
        return tokenAddr.balanceOf(address(this));
    }

    function getSalePeriod() public view returns (uint8) {
        if (block.timestamp >= seedStartDate && block.timestamp < seedEndDate) {
            return 1;       // seed sale
        } else if (block.timestamp >= seedEndDate && block.timestamp < privateEndDate) {
            return 2;       // private sale
        }

        return 0;
    }

    function getTokenPrice() public view returns (uint256) {
        uint256 tokenBalance = _getTokenBalance() - totalSoldAmount;
        uint8 tokenSalePeriod = getSalePeriod();

        if (tokenBalance >= ROUND1_MIN_AMOUNT * 10**18 && tokenBalance <= ROUND2_MIN_AMOUNT * 10**18) {
            if (tokenSalePeriod == 1) {
                return seedPriceForRound1;
            } else if (tokenSalePeriod == 2) {
                return privatePriceForRound1;
            }
        } else if (tokenBalance > ROUND2_MIN_AMOUNT * 10**18 && tokenBalance <= ROUND2_MAX_AMOUNT * 10**18) {
            if (tokenSalePeriod == 1) {
                return seedPriceForRound2;
            } else if (tokenSalePeriod == 2) {
                return privatePriceForRound2;
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

    function estimatedMaticAmount(uint256 _amount) public view returns (uint256) {
        uint256 maticPrice = uint256(getLatestPrice());
        uint256 tokenPrice = getTokenPrice();

        uint256 estimatedAmount = tokenPrice * _amount / maticPrice;

        return estimatedAmount;
    }

    function estimatedUSDTAmount(uint256 _amount) public view returns (uint256) {
        uint256 tokenPrice = getTokenPrice();

        uint256 estimatedAmount = tokenPrice * _amount / 10**20;

        return estimatedAmount;
    }

    function buyTokenWithMatic(uint256 _amount) external payable {
        require(getSalePeriod() > 0, "Not valid sale period");
        require(msg.value > 0, "Value cannot be zero");

        uint256 maticPrice = uint256(getLatestPrice());
        uint256 tokenPrice = getTokenPrice();

        require(tokenPrice > 0, "Invalid token price");
        require(msg.value >= tokenPrice * _amount / maticPrice, "Insufficient value");
        _lockToken(_amount, msg.sender);

        emit Buy(msg.sender, 1, msg.value, _amount, block.timestamp);
    }

    function buyTokenWithUSDT(uint256 _amount) external {
        require(getSalePeriod() > 0, "Not valid sale period");

        uint256 tokenPrice = getTokenPrice();
        require(tokenPrice > 0, "Invalid token price");

        uint256 _amountInUSDT = tokenPrice * _amount / 10**20;
        require(_amountInUSDT > 0, "Not valid amount");

        require(usdtAddr.balanceOf(msg.sender) >= _amountInUSDT, "Your USDT balance is insufficient");

        usdtAddr.transferFrom(msg.sender, address(this), _amountInUSDT);
        _lockToken(_amount, msg.sender);

        emit Buy(msg.sender, 2, _amountInUSDT, _amount, block.timestamp);
    }

    function claimToken() external {
        require(lockedTokens[msg.sender].endLockTimestamp <= block.timestamp, "Lock period(6 Months) isn't ended yet");
        require(lockedTokens[msg.sender].amount > 0, "Insufficient value");
        
        uint256 amount = lockedTokens[msg.sender].amount;

        require(_getTokenBalance() >= amount, "Insufficient balance");

        tokenAddr.transfer(msg.sender, amount);

        lockedTokens[msg.sender].amount = 0;
        lockedTokens[msg.sender].endLockTimestamp = 0;

        emit Claim(msg.sender, amount, block.timestamp);
    }

    function burn() external onlyAdminGroup {
        require(block.timestamp > privateEndDate, "private sale period");

        uint256 restBalance = _getTokenBalance();

        tokenAddr.transfer(0x000000000000000000000000000000000000dEaD, restBalance);
    }

    function withdraw() external onlyAdminGroup {
        uint256 lpBalance = address(this).balance * 50 / 100;
        uint256 devBalance = address(this).balance * 32 / 100;
        uint256 cfWallet1Balance = address(this).balance * 55 / 1000;
        uint256 cfWallet2Balance = address(this).balance * 55 / 1000;
        uint256 cfWallet3Balance = address(this).balance / 100;
        uint256 marketBalance = address(this).balance * 6 / 100;

        if (lpBalance > 0) {
            lpWallet.transfer(lpBalance);
        }
        
        if (devBalance > 0) {
            devWallet.transfer(devBalance);
        }
        
        if (cfWallet1Balance > 0) {
            cfWallet1.transfer(cfWallet1Balance);
        }
        
        if (cfWallet2Balance > 0) {
            cfWallet2.transfer(cfWallet2Balance);
        }
        
        if (cfWallet3Balance > 0) {
            cfWallet3.transfer(cfWallet3Balance);
        }
        
        if (marketBalance > 0) {
            marketWallet.transfer(marketBalance);
        }

        uint256 lpUSDTBalance = usdtAddr.balanceOf(address(this)) * 50 / 100;
        uint256 devUSDTBalance = usdtAddr.balanceOf(address(this)) * 32 / 100;
        uint256 cfWallet1USDTBalance = usdtAddr.balanceOf(address(this)) * 55 / 1000;
        uint256 cfWallet2USDTBalance = usdtAddr.balanceOf(address(this)) * 55 / 1000;
        uint256 cfWallet3USDTBalance = usdtAddr.balanceOf(address(this)) / 100;
        uint256 marketUSDTBalance = usdtAddr.balanceOf(address(this)) * 6 / 100;

        if (lpUSDTBalance > 0) {
            usdtAddr.transfer(lpWallet, lpUSDTBalance);
        }

        if (devUSDTBalance > 0) {
            usdtAddr.transfer(devWallet, devUSDTBalance);
        }

        if (cfWallet1USDTBalance > 0) {
            usdtAddr.transfer(cfWallet1, cfWallet1USDTBalance);
        }

        if (cfWallet2USDTBalance > 0) {
            usdtAddr.transfer(cfWallet2, cfWallet2USDTBalance);
        }

        if (cfWallet3USDTBalance > 0) {
            usdtAddr.transfer(cfWallet3, cfWallet3USDTBalance);
        }

        if (marketUSDTBalance > 0) {
            usdtAddr.transfer(marketWallet, marketUSDTBalance);
        }
    }

    receive() external payable {}
}