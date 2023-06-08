import { IAccount, Account } from "./Account";
import { IContract, Contract } from "./Contract";
import { ITransaction, Transaction } from "./Transaction";
import { IProxy, Proxy } from "./Proxy";

(async() => {
    let apiKey: string = '<Your Etherscan API Key here>';

    let account: IAccount = new Account(apiKey);
    let contract: IContract = new Contract(apiKey);
    let transaction: ITransaction = new Transaction(apiKey);
    let proxy: IProxy = new Proxy(apiKey);
    
    let ethAddress: string = '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae';
    
    try {
        let balance = await account.getBalance(ethAddress);
        console.log(`The balance of ETH address ${ ethAddress } is: ${ balance } wei.`);
    } catch (error)
    {
        console.log(`Error occured on reading balance of ETH address: ${ ethAddress }: ${ error }.`);
    }
    
    try { 
        let abi = await contract.getABI(ethAddress)
        console.log(`ABI of contract at address ${ ethAddress } is: ${ abi }.`);
    } catch (error)
    {
        console.log(`Error occured on retrieving ABI of contract at address: ${ ethAddress }: ${ error }.`);
    }

    let txthash: string = '0x8e32028a02aaf037526df9ba13c309623b52a1178e70dd30479c983d6e164c98';
    try
    {
        let status = await transaction.getStatus(txthash);
        console.log(`Status of transaction of hash ${ txthash } is:`);
        console.dir(status);
    } catch (error) 
    {
        console.log(`Error occured on retrieving status of transaction of hash: ${ ethAddress }: ${ error }.`);
    }
    
    let ethAddressToGetTransactions: string = '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326';
    try
    {
        let transactionCount: Number = await proxy.eth_getTransactionCount(ethAddressToGetTransactions);
        console.log(`The number of transactions of ETH address \'${ ethAddressToGetTransactions }\' is: ${ transactionCount }.`);
    }
    catch (error)
    {
        console.log(`Error occured on retrieving number of transaction of address: ${ ethAddressToGetTransactions }: ${ error }.`);
    }
    
    try
    {
        let mostRecentBlock: string = await proxy.eth_blockNumber();
        console.log(`The most recent block number on Ethereum network is ${ mostRecentBlock }.`);
    }
    catch (error)
    {
        console.log(`Error occured on retrieving the most recent block number on Ethereum network.`);
    }

    let blockNumber:string = '0xc63276';
    try
    {
        let blockInfo = await proxy.eth_getBlockByNumber(blockNumber);
        console.log(`Returned the following information for the block of number: ${ blockNumber }:`);
        console.dir(blockInfo);
    }
    catch (error) 
    {
        console.log(`Error occured on retrieving information for the block of number: ${ blockNumber }.`);
    }
})();