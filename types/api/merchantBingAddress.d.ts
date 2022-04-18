export type BindAddressResponse = {
    merchant_address: string;
    user_id: string;
    rec_address: string;
    /**
     * /
     *
     *
     * /**
     */
    uuid: string;
};
export type BindAddressParams = {
    merchant_address: string;
    user_id: string;
    notify: string;
    chain_name: string;
};
/**
 * @typedef {Object} BindAddressResponse
 * @property {string} merchant_address
 * @property {string} user_id
 * @property {string} rec_address
 * @property {string} uuid
 *
 * /


/**
 * @typedef {Object} BindAddressParams
 * @property {string} merchant_address
 * @property {string} user_id
 * @property {string} notify
 * @property {string} chain_name
 */
/**
 * @param {BindAddressParams} info
 * @param {string} privateKey
 * @return {BindAddressResponse}
 */
export function merchantBingAddress(info: BindAddressParams, privateKey: string): BindAddressResponse;
