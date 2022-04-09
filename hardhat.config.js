require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/HqOsj0LT86ol3jBf0D21JIUJsJwBRwFi",
      accounts: ["1a8dd3cd5fd0719b33309cc69616a182b5563b16356209bee5da632d86c41b39"]
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: 'FXFNXGKFXYG34KZDRRJ6SMPG3JWN3MB4H6'
    }
  }
};

