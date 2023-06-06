import { RequestHandler }  from "./Request";

interface ITransaction {
    getStatus(address: string): Promise<string>;
}

/**
 * Class implements logic for retrieving information about transactions on Ethereum blockchain 
 * by calling Etherscan API. 
 */
class Transaction implements ITransaction {

    protected apiKey: string; 
    protected requestHandler: RequestHandler;

    constructor(apiKey: string, timeoutMiliseconds: number = 1000) {
        this.apiKey = apiKey;
        this.requestHandler = new RequestHandler(timeoutMiliseconds);
    }

    /**
     * Returns status of a particular transaction of a given hash. 
     * @param txhash - Transaction hash. 
     * @returns {Promise<string>}
     * @example
     * transaction.getStatus(txhash).then((status) => { ... });
     */
    async getStatus(txhash: string): Promise<string> { 

        let module = 'transaction';
        let action = 'getstatus';
        let apikey = this.apiKey;
        let params: URLSearchParams = new URLSearchParams({ module, action, txhash, apikey });

        return this.requestHandler.getRequest(params.toString());
    }
}

export { ITransaction, Transaction };