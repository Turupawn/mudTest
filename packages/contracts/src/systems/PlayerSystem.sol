// SPDX-License-Identifier: MIT
pragma solidity >=0.8.24;

import { System } from "@latticexyz/world/src/System.sol";
import { Counter, Position } from "../codegen/index.sol";

contract PlayerSystem is System {
  function spawn() public returns(int32 x, int32 y) {
    address player = _msgSender();
    Position.set(x, y);
  }
}
