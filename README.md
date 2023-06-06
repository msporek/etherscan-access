# etherscan-access
A simple Typescript module for accessing Etherscan API.

Functionalities implemented: 
- 
**Account class:** 
- Call ```Account.getBalance(address: string)``` to get Ether balance of a single Ethereum account (Ethereum mainnet).
- Call ```Account.getBalances(addresses: string[])``` to get Ether balance of multiple Ethereum accounts (Ethereum mainnet).

**Contract class:** 
- Call ```Contract.getABI(address: string)``` to get ABI of Ethereum contract (Ethereum mainnet).
- Call ```Contract.getCode(address: string)``` to get source code of a verified of Ethereum contract (Ethereum mainnet).

**Transaction class:** 
- Call ```Transaction.getStatus(txhash: string)``` to get status of Ethereum transaction of a particular hash (Ethereum mainnet).

Dependencies: 
-
- Axios for HTTP requests. 

Sample usage (Typescript): 
-
``` 
account.getBalance('0x6b75d8af000000e20b7a7ddf000ba900b4009a80')
    .then((balance) => {
        // Handle the returned balance here. 
    });
```
