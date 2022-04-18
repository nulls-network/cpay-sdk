const { axiosIns } = require('../config/axios')

const url = '/v1/order'

/**
 * @typedef {Object} StatusResponse
 * @property {number} code
 * @property {string} message
 * @property {Object<StatusResponseBody>} data
 */

/**
 * @typedef {Object} StatusResponseBody
 * @property {string} uuid 
 * @property {string} out_order_no 
 * @property {string} rec_chain - 链
 * @property {string} pay_token - 支付币种
 * @property {string} rec_address - 支付地址
 * @property {string} rec_amount - 订单金额
 * @property {number} deadline - 过期时间（秒）
 * @property {string} pay_amount 
 * @property {'normal'|'success'|'faild'} pay_result - 支付结果
 * @property {string} got_amount - 以支付金额
 * @property {string} out_time - 创建时间
 */

/**
 * 
 * @param {string} uuid 
 * @returns {Promise<StatusResponse>}
 */
async function getOrderStatus(uuid) {
    return (await axiosIns.get(`${url}/${uuid}`)).data;
}

module.exports = {
    getOrderStatus
}