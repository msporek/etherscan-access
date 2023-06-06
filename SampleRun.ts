import { IAccount, Account } from "./Account";
import { IContract, Contract } from "./Contract";

let apiKey: string = "<Your API Key>";

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