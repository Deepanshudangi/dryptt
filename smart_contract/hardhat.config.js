
require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity:'0.8.17',
  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/T_5aClzvBXQEOqJ0QhZbHhr0IxBIF6IQ',
      accounts:['22919f6c0243878550040ec194bf886ba09ea3e780d0b5195609b0182a677e64']

    },
  },
};