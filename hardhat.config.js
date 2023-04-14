require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()


// @type import('hardhat/config').HardhatUserConfig
// This is a sample Hardhat task. To learn how to create your own go to
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


module.exports = {
  solidity: '0.8.9',
  networks: {
    sepolia: {
      chainId: 11155111,
      url: process.env.NETWORK_SEPOLIA_URL,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY],
    },
  },
}

