import { RequestHandler }  from "./Request";

interface IProxy {
    getTransactionCount(address: string): Promise<Number>;
}

/**
 * Class implements methods of the "proxy" module of the Etherscan API. 
 */
class Proxy implements IProxy {

    protected apiKey: string; 
    protected requestHandler: RequestHandler;

    constructor(apiKey: string, timeoutMiliseconds: number = 1000) {
        this.apiKey = apiKey;
        this.requestHandler = new RequestHandler(timeoutMiliseconds);
    }

    /**
     * Returns the number of transactions that have been sent to the blockchain by the 
     * given address. If it is not possible to return transaction count sent by a given 
     * Ethereum address, then the method returns -1. 
     * 
     * @param address - Address to check ETH for the number of transactions sent. 
     * @returns {Promise<string>}
     * @example
     * proxy.getTransactionCount(ethAddress).then((balance) => { ... });
     */
    async getTransactionCount(address: string): Promise<Number> { 

        let module = 'proxy';
        let action = 'eth_getTransactionCount';
        let tag = 'latest'
        let apiKey = this.apiKey;
        let params: URLSearchParams = new URLSearchParams({ module, action, address, tag, apiKey });

        try
        {
            let transactionCountString: string = await this.requestHandler.getRequest(params.toString());
            if (!transactionCountString) {
                return Promise.resolve(-1);
            }

            return Promise.resolve(Number.parseInt(transactionCountString));
        }
        catch (error)
        {
            return Promise.resolve(-1);
        }
    }
}

export { IProxy, Proxy };