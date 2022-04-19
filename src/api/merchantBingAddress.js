const { doSign } = require("../util/sign")
const { axiosIns } = require('../config/axios')

const url = 'v1/bing/merchantBingAddress'

/**
 * @typedef {Object} MerchantBindResponse
 * @property {number} code
 * @property {string} message
 * @property {Object<MerchantBindResponseBody>} data
 */

/**
 * @typedef {Object} MerchantBindResponseBody
 * @property {string} merchant_address
 * @property {string} user_id
 * @property {string} rec_address
 * @property {string} uuid
 */


/**
 * @typedef {Object} BindAddressParams
 * @property {string} merchant_address
 * @property {string} user_id
 * @property {string} notify
 * @property {string} chain_name
 */


/**
 * @param {BindAddressParams} info
 * @return {Promise<MerchantBindResponse>}
 */
async function merchantBingAddress(info) {
    const sign = await doSign(
        [
            info.merchant_address,
            info.user_id,
            info.notify,
            info.chain_name
        ],
        this.privateKey
    );
    return (await axiosIns.post(url,{
        ...info,
        signature:sign
    })).data
}

module.exports = {
    merchantBingAddress
}
