const { createOrder } = require('./api/createOrder')
const { getBalance } = require('./api/getBalance')
const { getOrderStatus } = require('./api/getOrderStatus')
const { getWithdrawResult } = require('./api/getWithdrawResult')
const { merchantBingAddress } = require('./api/merchantBingAddress')
const { doWithdraw } = require('./api/withdraw')

function Cpay(publicKey, privateKey) {
    this.publicKey = publicKey
    this.privateKey = privateKey
}

Cpay.prototype.createOrder = createOrder
Cpay.prototype.getBalance = getBalance
Cpay.prototype.getOrderStatus = getOrderStatus
Cpay.prototype.getWithdrawResult = getWithdrawResult
Cpay.prototype.merchantBingAddress = merchantBingAddress
Cpay.prototype.doWithdraw = doWithdraw

module.exports = Cpay