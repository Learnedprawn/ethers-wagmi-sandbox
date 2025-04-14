// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Box {
    uint256 public number = 2;

    function getNumber() public view returns(uint256) {
        return number;
    }

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }
}
