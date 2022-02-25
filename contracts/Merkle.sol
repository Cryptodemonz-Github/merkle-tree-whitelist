pragma solidity ^0.8.11;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Merkle {
    bytes32 public root =
        0x1a86fca6f1c5dd82fa49a1df2ccd2bd42dfa6013337f7bc1881f3000f3606eee;

    mapping(address => bool) public claimed;

    function verify(bytes32[] calldata _proof) public {
        require(!claimed[msg.sender]);
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(_proof, root, leaf));
        claimed[msg.sender] = true;
    }
}
