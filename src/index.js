const { createOrder } = require('./api/createOrder')
const { getBalance } = require('./api/getBalance')
const { getOrderStatus } = require('./api/getOrderStatus')
const { getWithdrawResult } = require('./api/getWithdrawResult')
const { merchantBingAddress } = require('./api/merchantBingAddress')
const { doWithdraw } = require('./api/withdraw')
const Cpay = {
    createOrder,
    getBalance,
    getOrderStatus,
    getWithdrawResult,
    merchantBingAddress,
    doWithdraw
}
module.exports = Cpay