import { IAccount, Account } from "./Account";
import { IContract, Contract } from "./Contract";
import { ITransaction, Transaction } from "./Transaction";

let apiKey: string = "<Your Etherscan API key>";

let account: IAccount = new Account(apiKey);

let ethAddress: string = '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae';

account.getBalance(ethAddress)
    .then((balance) => {
        console.log(`The balance of ETH address ${ ethAddress } is: ${ balance } wei.`);
    });

let contract: IContract = new Contract(apiKey);

contract.getABI(ethAddress)
    .then((abi) => { 
        console.log(`ABI of contract at address ${ ethAddress } is: ${ abi }.`);
    });

let transaction: ITransaction = new Transaction(apiKey);

let txthash: string = '0x8e32028a02aaf037526df9ba13c309623b52a1178e70dd30479c983d6e164c98';

transaction.getStatus(txthash)
    .then((status) => { 
        console.log(`Status of transaction of hash ${ txthash } is:`);
        console.dir(status);
    });
