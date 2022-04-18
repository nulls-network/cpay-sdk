export type WithdrawParams = {
    from: string;
    to: string;
    token: string;
    amount: string;
    fromChain: string;
    toChain: string;
    uuid: string;
};
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
 */
export function doWithdraw(info: WithdrawParams, privateKey: string): Promise<any>;
