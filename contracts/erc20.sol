// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Madu is ERC20, Ownable {
    uint rate;
    uint fixedSupply;
    constructor() ERC20("Madu", "MADU") {
        rate = 1000;
        fixedSupply = 1000000 * 10 ** 18;
        _mint(msg.sender, 50000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function buyToken(address receiver) public payable {
        require(msg.value > 0);
        uint amountToBuy = msg.value * rate;
        require(fixedSupply >= (totalSupply() + amountToBuy), "Total supply cannot be exceeded");
        _mint(receiver, amountToBuy);
    }
}