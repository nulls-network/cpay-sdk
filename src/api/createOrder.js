const { doSign } = require("../util/sign")
const { axiosIns } = require('../config/axios')

const url = '/v1/order/create'

/**
 * @typedef {Object} OrderResponse
 * @property {number} code
 * @property {string} message
 * @property {Object<OrderResponseContent>} data
 */

/**
 * @typedef {Object} OrderResponseContent
 * @property {string} uuid
 * @property {string} out_order_no - 订单号
 * @property {string} rec_chain
 * @property {string} pay_token - 支付币种
 * @property {string} rec_address -支付地址
 * @property {number} deadline - 过期时间（秒）
 * @property {string} rec_amount - 订单金额
 * @property {string} pay_amount
 * @property {string} pay_result
 * @property {string} sign_addr - 签名者公钥
 * @property {string} out_time - 创建时间
 */

/**
 * @param {Object} info - 需要签名的字段
 * @param {string} info.out_order_no 订单号
 * @param {string} info.pay_chain 链名
 * @param {string} info.pay_token 支付币种
 * @param {string} info.pay_amount 支付金额
 * @param {string} info.notify 回调通知
 * @return {Promise<OrderResponse>}
 */
async function createOrder(info) {
    try {
        const sign = await doSign(
            [
                info.out_order_no,
                info.pay_chain,
                info.pay_token,
                info.pay_amount,
                info.notify
            ],
            this.privateKey)
        return (await axiosIns.post(url, {
            ...info,
            signature: sign,
            pub_key: this.publicKey
        })).data
    } catch (error) {
        throw error
    }
}

module.exports = {
    createOrder
}
