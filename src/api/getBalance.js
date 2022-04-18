const { axiosIns } = require('../config/axios')

const url = '/v1/merchant/balanceOf'

/**
 * @typedef {Object} BalanceResponse
 * @property {number} code
 * @property {string} message
 * @property {Object<BalanceResponseContent>} data
 */

/**
 * @typedef {Object} BalanceResponseContent
 * @property {string} total - 总余额(带币种进度)，USDT精度为6
 * @property {string} freeze - 冻结提现金额(带币种进度)
 */

/**
 * @typedef {Object} BalanceParam
 * @property {string} merchant
 * @property {string} chain
 * @property {string} token
 */

/**
 * 
 * @param {BalanceParam} params 
 * @return {Promise<BalanceResponse>}
 */
async function getBalance(params) {
    return (await axiosIns.post(url, params)).data
}

module.exports = {
    getBalance
}