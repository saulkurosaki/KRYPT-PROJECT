require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/EnpYPXfAO3tjRLKV9tlsBxQ9iZwxauoX",
      accounts: [
        "82e8ddca2489862341a1f2e09708c67030987763e44530cda5ebb6f0d01741a3",
      ],
    },
  },
};
