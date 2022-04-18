export type BalanceResponse = {
    code: number;
    message: string;
    data: any;
};
export type BalanceResponseContent = {
    /**
     * - 总余额(带币种进度)，USDT精度为6
     */
    total: string;
    /**
     * - 冻结提现金额(带币种进度)
     */
    freeze: string;
};
export type BalanceParam = {
    merchant: string;
    chain: string;
    token: string;
};
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
export function getBalance(params: BalanceParam): Promise<BalanceResponse>;
