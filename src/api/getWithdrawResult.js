const { axiosIns } = require('../config/axios')

const url = '/v1/withdraw'

/**
 * @typedef {Object} WithdrawResultResponse
 * @property {number} code
 * @property {string} message
 * @property {Object<WithdrawResultResponseBody>} data
 */

/**
 * @typedef {Object} WithdrawResultResponseBody
 * @property {'success'|'paying'} hash
 */

/**
 * @param {string} txHash
 * @return {Promise<WithdrawResultResponse>}
 */
async function getWithdrawResult(txHash){
    return (await axiosIns.get(`${url}/${txHash}`)).data;
}

module.exports = {
    getWithdrawResult
}

