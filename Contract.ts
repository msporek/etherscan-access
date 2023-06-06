import { RequestHandler }  from "./Request";

interface IContract {
    getABI(address: string): Promise<string>;
    getCode(address: string): Promise<string>;
}

/**
 * Class implements logic for retrieving information about contracts on Ethereum blockchain 
 * by calling Etherscan API. It allows retrieving contract ABIs and source code for verified 
 * contracts on the Ethereum network. 
 */
class Contract implements IContract {

    protected apiKey: string; 
    protected requestHandler: RequestHandler;

    constructor(apiKey: string, timeoutMiliseconds: number = 1000) {
        this.apiKey = apiKey;
        this.requestHandler = new RequestHandler(timeoutMiliseconds);
    }

    /**
     * Returns ABI for a contract of a given address. 
     * @param address - Address to get ABI from. 
     * @returns {Promise<string>}
     * @example
     * contract.getABI(ethAddress).then((abi) => { ... });
     */
    async getABI(address: string): Promise<string> { 

        let module = 'contract';
        let action = 'getabi';
        let apikey = this.apiKey;
        let params: URLSearchParams = new URLSearchParams({ module, action, address, apikey });

        return this.requestHandler.getRequest(params.toString());
    }

    /**
     * Returns binary code for a contract of a given address. 
     * @param address - Address to get ABI from. 
     * @returns {Promise<string>}
     * @example
     * contract.getCode(ethAddress).then((code) => { ... });
     */
    async getCode(address: string): Promise<string> { 

        let module = 'contract';
        let action = 'getsourcecode';
        let apikey = this.apiKey;
        let params: URLSearchParams = new URLSearchParams({ module, action, address, apikey });

        return this.requestHandler.getRequest(params.toString());
    }
}

export { IContract, Contract };