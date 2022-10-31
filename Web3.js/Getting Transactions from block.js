const Web3 = require("web3");
const provider = process.env.PROVIDER_INFURA_KEY;
const web3 = new Web3(provider);
web3.eth.getBlockNumber().then(console.log); //gets last mined block
web3.eth.getBlock("latest").then((block)=>{
    console.log({
        blockHash:block.hash,
    blockNumber:block.number})
    });  //latestBlock hash and number
web3.eth.getBlock("latest").then(console.log);//latest block 
web3.eth.getBlockTransactionCount("latest").then(console.log);//transaction count
web3.eth.getTransactionFromBlock(12945802,2).then(console.log);//returns 2nd transaction from block number
