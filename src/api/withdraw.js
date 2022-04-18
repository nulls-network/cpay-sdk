const { axiosIns } = require('../config/axios')
const { doSign } = require("../util/sign")


const url = '/v1/merchant/doWithdraw'

/**
 * @typedef {Object} WithdrawResponse
 * @property {number} code
 * @property {string} message
 * @property {Object<WithdrawResponseBody>} data
 */

/**
 * @typedef {Object} WithdrawResponseBody
 * @property {string} hash
 */


/**
 * @typedef {Object} WithdrawParams
 * @property {string}  from
 * @property {string}  to
 * @property {string}  token
 * @property {string}  amount
 * @property {string}  fromChain
 * @property {string}  toChain
 * @property {string}  uuid
 */

/**
 * @param {WithdrawParams} info
 * @param {string} privateKey
 * @return {Promise<WithdrawResponse>}
 */
async function doWithdraw(info, privateKey) {
    try {
        const sign = await doSign(
            [
                info.to,
                info.token,
                info.amount,
                info.fromChain,
                info.toChain,
                info.uuid,
            ],
            privateKey)
        return (await axiosIns.post(url, {
            ...info,
            signature: sign,
        })).data
    } catch (error) {
        throw error
    }
}

module.exports = {
    doWithdraw
}