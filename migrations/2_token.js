const Migrations = artifacts.require('KnitFinance')
const Web3 = require('web3')
require('dotenv').config()

let web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`)

module.exports = function (deployer) {
  deployer.deploy(Migrations, web3.utils.toWei('100000000', 'ether'))
}
