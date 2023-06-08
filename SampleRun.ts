import { IAccount, Account } from "./Account";
import { IContract, Contract } from "./Contract";
import { ITransaction, Transaction } from "./Transaction";
import { IProxy, Proxy } from "./Proxy";

let apiKey: string = '<Your Etherscan API Key here>';

let account: IAccount = new Account(apiKey);
let contract: IContract = new Contract(apiKey);
let transaction: ITransaction = new Transaction(apiKey);
let proxy: IProxy = new Proxy(apiKey);

let ethAddress: string = '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae';

account.getBalance(ethAddress)
    .then((balance) => {
        console.log(`The balance of ETH address ${ ethAddress } is: ${ balance } wei.`);
    });

contract.getABI(ethAddress)
    .then((abi) => { 
        console.log(`ABI of contract at address ${ ethAddress } is: ${ abi }.`);
    });

let txthash: string = '0x8e32028a02aaf037526df9ba13c309623b52a1178e70dd30479c983d6e164c98';

transaction.getStatus(txthash)
    .then((status) => { 
        console.log(`Status of transaction of hash ${ txthash } is:`);
        console.dir(status);
    });

proxy.eth_getTransactionCount('0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326')
    .then((transactionCount) => {
        console.log(`The number of transactions of ETH address '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326' is: ${ transactionCount }.`);
    });

proxy.eth_blockNumber()
    .then((blockNumber) => {
        console.log(`The most recent block number on Ethereum network is ${ blockNumber }.`);
    });

let blockNumber = '0xC63276';
proxy.eth_getBlockByNumber(blockNumber)
    .then((blockInfo) => { 
        console.log(`Returned the following information for the block of number: ${ blockNumber }:`);
        console.dir(blockInfo);
    });