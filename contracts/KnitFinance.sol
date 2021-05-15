// SPDX-License-Identifier: NFT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KnitFinance is ERC20 {

    constructor(uint256 initialSupply) ERC20("Knit Finance", "KFT") {
        _mint(msg.sender, initialSupply );
    }
}
