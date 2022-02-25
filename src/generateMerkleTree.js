const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

const addresses = [
  "0x5c06c4b7b1b40195cbf443915e07a4af51a6db9d",
  "0x8888888888e9997e64793849389a8faf5e8e547c",
  "0xaad7a41eda0ec2be9885fac97e0cbd1a0a619548",
  "0xeddf732e49c8be58677240ecb0b9309dfc65d993",
  "0x6937a767422c879a90ccb1765c0370431a87f70a",
  "0x4fad0c93cb24c05cbcbbce61253c4ffd90525655",
  "0x7cf703ac5f9bc457ae57268eaeacb8446b5ae439",
  "0x708e246692991600e9754af80be112fbf8cf3eba",
  "0x0258aa61198204d52dbed666326bed75b3a09126",
  "0x7639db9d8cbf01997a00699135ab7f5dfe66012b",
  "0x6cbf1b5dc4fe5b8b71ba156fb6d3342ad6a4e8fa",
  "0xf3538909a45416486fb0150ba8d40612e4507847",
  "0x9fb470ae1278be58fe7511f465812d44696f98f1",
  "0x35bf2def687e04d6ae26adcdb319dbc175397e22",
];

const leaf = [];

addresses.map((e) => {
  leaf.push(keccak256(e));
});
const merkle = new MerkleTree(leaf, keccak256, { sortPairs: true });

console.log("root hash is:", merkle.getRoot().toString('hex'))
console.log("merkle tree:", merkle.toString())

const randomAddress = leaf[0]
const hexProof = merkle.getHexProof(randomAddress)

console.log("hexproof for", addresses[0], hexProof)


