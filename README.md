# etherscan-access
Typescript module for accessing Etherscan API to get information about accounts, contracts and transactions on the Ethereum blockchain (Ethereum mainnet).

Functionalities implemented: 
- 
**Account class:** 
- Call ```Account.getBalance(address: string)``` to get Ether balance of a single Ethereum account.
- Call ```Account.getBalances(addresses: string[])``` to get Ether balance of multiple Ethereum accounts.

**Contract class:** 
- Call ```Contract.getABI(address: string)``` to get ABI of Ethereum contract.
- Call ```Contract.getCode(address: string)``` to get source code of a verified of Ethereum contract.

**Transaction class:** 
- Call ```Transaction.getStatus(txhash: string)``` to get status of Ethereum transaction of a particular hash.

**Proxy class:**
- Call ```Proxy.eth_blockNumber()``` to get the most recent Ethereum block number. 
- Call ```Proxy.eth_getBlockByNumber(blockNumber: string)``` to get details about the Ethereum block of given number (hex tag, ex. '0xC63276').
- Call ```Proxy.getTransactionCount(address: string)``` to get the number of transactions sent to the blockchain by the given Ethereum account address.

Dependencies: 
-
- Axios for HTTP requests. 

Sample usage (Typescript): 
-
``` 
account.getBalance('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae')
    .then((balance) => {
        // Handle the returned account balance here. 
    });

contract.getABI('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae')
    .then((abi) => { 
        // Handle the returned ABI here. 
    });
    
transaction.getStatus('0x8e32028a02aaf037526df9ba13c309623b52a1178e70dd30479c983d6e164c98')
    .then((status) => { 
        // Handle the returned transaction status here. 
    });
    
proxy.getTransactionCount('0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326')
    .then((transactionCount) => {
        // Handle the returned transaction transaction count. 
    });

proxy.eth_blockNumber()
    .then((blockNumber) => {
        // Handle the returned most recent Ethereum block number. 
    });

proxy.eth_getBlockByNumber('0xC63276')
    .then((blockInfo) => { 
        // Handle the returned block info.
    });

```
