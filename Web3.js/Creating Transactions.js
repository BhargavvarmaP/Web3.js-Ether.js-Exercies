const Tx = require("ethereumjs-tx").Transaction;
const Web3 = require("web3");
const provider = new Web3(process.env.PROVIDER_INFURA_KEY);
const web3 =new Web3(provider);
var account1=process.env.ACCOUNT1_ADDRESS;
var account2=process.env.ACCOUNT2_ADDRESS;
var pvtkey1=process.env.PVTKEY1;
var pvtkey2=process.env.PVTKEY2;
var pvtbuffer1=Buffer.from(pvtkey1,"hex");
var pvtbuffer2=Buffer.from(pvtkey2,"hex");
web3.eth.getTransactionCount(account1,(err,txcount)=>{
    //Build the transaction
    const txObject = {
        nonce: web3.utils.toHex(txcount),
        from:account1,
        to:account2,
        value:web3.utils.toHex(web3.utils.toWei("1","ether")),
        gasLimit:web3.utils.toHex(21000),
        gasPrice:web3.utils.toHex(web3.utils.toWei("10","gwei"))        
    }
    //sigin transaction
     const tx = new Tx(txObject,{"chain":"ropsten"});
     tx.sign(pvtbuffer1);
     const serializedTx = tx.serialize();
     const raw = "0x"+serializedTx.toString("hex");
    //Broadcast transaction
    web3.eth.sendSignedTransaction(raw).on("receipt",console.log);
});