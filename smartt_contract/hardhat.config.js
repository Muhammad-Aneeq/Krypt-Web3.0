// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

// /** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    ETH_GOERLI: {
      url: "https://eth-goerli.g.alchemy.com/v2/CXWIVEA77WILq02NSYFVXcn9lxjqHhmv",
      accounts: [
        "befc15791a82ac3c35a6ce6d11461b7b9de677687330db38d4424188eaf34535",
      ],
    },
  },
};
