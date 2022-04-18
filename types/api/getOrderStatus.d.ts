export type StatusResponse = {
    code: number;
    message: string;
    data: any;
};
export type StatusResponseBody = {
    uuid: string;
    out_order_no: string;
    /**
     * - 链
     */
    rec_chain: string;
    /**
     * - 支付币种
     */
    pay_token: string;
    /**
     * - 支付地址
     */
    rec_address: string;
    /**
     * - 订单金额
     */
    rec_amount: string;
    /**
     * - 过期时间（秒）
     */
    deadline: number;
    pay_amount: string;
    /**
     * - 支付结果
     */
    pay_result: 'normal' | 'success' | 'faild';
    /**
     * - 以支付金额
     */
    got_amount: string;
    /**
     * - 创建时间
     */
    out_time: string;
};
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
export function getOrderStatus(uuid: string): Promise<StatusResponse>;
