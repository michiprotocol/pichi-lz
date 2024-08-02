// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {OFT} from "@layerzerolabs/oft-evm/contracts/OFT.sol";

contract PichiToken is OFT {
    error ZeroAddressProvided();

    error InvalidAmount();

    /// @notice Initializes variables during deployment
    /// @param _name Token name
    /// @param _symbol Token symbol
    /// @param _lzEndpoint Address of LayerZero endpoint
    /// @param _delegate Address of delegate
    /// @param amount Total supply
    constructor(string memory _name, string memory _symbol, address _lzEndpoint, address _delegate, uint256 amount)
        OFT(_name, _symbol, _lzEndpoint, _delegate)
        Ownable(_delegate)
    {
        if (_lzEndpoint == address(0) || _delegate == address(0)) revert ZeroAddressProvided();
        if (amount == 0) revert InvalidAmount();
        _mint(msg.sender, amount);
    }
}
