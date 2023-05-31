# etherscan-access
A simple Typescript module for accessing Etherscan API.

Functionalities implemented: 
- 
**Account class:** 
- Call ```Account.getBalance(address: string)``` to get Ether balance of a single Ethereum account (Ethereum mainnet).
- Call ```Account.getBalances(addresses: string[])``` to get Ether balance of multiple Ethereum accounts (Ethereum mainnet).

Dependencies: 
-
- Typescript
- Axios

Sample usage (Typescript): 
-
``` 
account.getBalance('0x6b75d8af000000e20b7a7ddf000ba900b4009a80')
    .then((balance) => {
        // Handle the returned balance here. 
    });
```
