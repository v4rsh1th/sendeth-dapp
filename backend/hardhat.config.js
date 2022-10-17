require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/626ad4866437410fa0ad986b9576bbbf",
      accounts: ["b0b8becd5eed2caaf577299dd458ced95da0b42be767330f8098b91f577cb026"]
    }
  }
}