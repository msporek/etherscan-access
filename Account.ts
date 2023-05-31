import { RequestHandler }  from "./Request";

interface IAccount {
    getBalance(address: string): Promise<string>;
    getBalances(addresses: string[]): Promise<string>;
}

/**
 * Class implements logic for retrieving information about accounts on Ethereum blockchain 
 * by calling Etherscan API.
 */
class Account implements IAccount {

    protected apiKey: string; 
    protected requestHandler: RequestHandler;

    constructor(apiKey: string, timeoutMiliseconds: number = 1000) {
        this.apiKey = apiKey;
        this.requestHandler = new RequestHandler(timeoutMiliseconds);
    }

    /**
     * Returns ETH balance of given address. 
     * @param address - Address to check ETH balance. 
     * @returns {Promise<string>}
     * @example
     * account.accountBalance(ethAddress).then((balance) => { ... });
     */
    async getBalance(address: string): Promise<string> { 

        let module = 'account';
        let action = 'balance';
        let tag = 'latest';
        let apikey = this.apiKey;
        let params: URLSearchParams = new URLSearchParams({ module, action, tag, address, apikey });

        return this.requestHandler.getRequest(params.toString());
    }

    /**
     * Returns ETH balances of given addresses.
     * 
     * @param addresses - Array of addresses to check ETH balances. 
     * @returns {Promise<string>}
     * @example
     * account.getBalances([ethAddress, ethAddress]).then((balance) => { ... });
     */
    async getBalances(addresses: string[]): Promise<string> { 

        let module = 'account';
        let action = 'balancemulti';
        let tag = 'latest';
        let address = (addresses && addresses.length) ? (addresses.join(',')) : ('');
        let apikey = this.apiKey;
        let params: URLSearchParams = new URLSearchParams({ module, action, tag, address, apikey });

        return this.requestHandler.getRequest(params.toString());
    }
}

export { IAccount, Account };