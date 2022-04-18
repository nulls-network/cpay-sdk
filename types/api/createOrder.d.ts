export type OrderResponse = {
    code: number;
    message: string;
    data: any;
};
export type OrderResponseContent = {
    uuid: string;
    /**
     * - 订单号
     */
    out_order_no: string;
    rec_chain: string;
    /**
     * - 支付币种
     */
    pay_token: string;
    /**
     * -支付地址
     */
    rec_address: string;
    /**
     * - 过期时间（秒）
     */
    deadline: number;
    /**
     * - 订单金额
     */
    rec_amount: string;
    pay_amount: string;
    pay_result: string;
    /**
     * - 签名者公钥
     */
    sign_addr: string;
    /**
     * - 创建时间
     */
    out_time: string;
};
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
 * @param {string} publicKey - 签名者的公钥
 * @param {string} privateKey - 签名者的私钥
 * @return {Promise<OrderResponse>}
 */
export function createOrder(info: {
    out_order_no: string;
    pay_chain: string;
    pay_token: string;
    pay_amount: string;
    notify: string;
}, publicKey: string, privateKey: string): Promise<OrderResponse>;
