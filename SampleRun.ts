import { IAccount, Account } from "./Account";

let apiKey: string = "<Your Etherscan API Key>";

let account: IAccount = new Account(apiKey);

let ethAddress: string = '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae';

account.getBalance(ethAddress)
    .then((balance) => {
        console.log(`The balance of ETH address ${ ethAddress } is: ${ balance } wei.`);
    });