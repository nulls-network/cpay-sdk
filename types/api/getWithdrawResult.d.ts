export type WithdrawResultResponse = {
    code: number;
    message: string;
    data: any;
};
export type WithdrawResultResponseBody = {
    hash: 'success' | 'paying';
};
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
export function getWithdrawResult(txHash: string): Promise<WithdrawResultResponse>;
