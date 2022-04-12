require('@nomiclabs/hardhat-waffle');

module.exports = {

  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/9zhER4itt-km91-mbAVy0IjssIljRzmg',
      accounts: ["f66f9b13db1ed1b73a24ed7c79fd58a8d254c02b58c71bdf1f190a12ae84ce9a"]
    }
  }
}

