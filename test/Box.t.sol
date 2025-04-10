// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Box} from "../src/Box.sol";

contract BoxTest is Test {
    Box public box;

    function setUp() public {
        box = new Box();
        box.setNumber(0);
    }

    function test_Increment() public {
        box.increment();
        assertEq(box.number(), 1);
    }

    function testFuzz_SetNumber(uint256 x) public {
        box.setNumber(x);
        assertEq(box.number(), x);
    }
}
