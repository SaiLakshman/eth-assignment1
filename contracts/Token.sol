// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./External/ERC20.sol";
import "./External/Ownable.sol";

contract Token is ERC20,Ownable {

    
    
constructor() ERC20("Token", "TKN") {}

    // Mint

    function Mint(address recipient,uint _amount) external {
        
        _mint(recipient,_amount * (10 ** decimals()));
    }

    // balance of

    function balanceOf(address account) public view virtual override returns (uint256) {
        return ERC20.balanceOf(account);
    }

    // approve
    
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        _approve(_msgSender(), spender, amount);
        return true;
    }

    // transfer

    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    
}