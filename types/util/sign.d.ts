export function doSign(info: any[], privateKey: any): Promise<string>;
export function toBytes(...params: any[]): string;
export function doRecover(bytesData: any, signature: any): string;
export class SignError extends Error {
    constructor(message: any);
}
