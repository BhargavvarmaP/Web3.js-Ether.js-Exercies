const Web3 = require("web3"); //creating web3 instance
const provider = process.env.PROVIDER_INFURA_KEY; // creationg provider giving 
const web3 = new Web3(provider); //assigning Web3 instance and provider to object called web3
var account1 = process.env.ACCOUNT1_ADDRESS; //accounts of containing address1
var account2 = process.env.ACCOUNT2_ADDRESS; //accounts of containing address2
web3.eth.getBalance(account1,(err,res)=>{console.log(web3.utils.fromWei(res,"ether"));}); //returns balances of account1
web3.eth.getBalance(account2,(err,res)=>{console.log(web3.utils.fromWei(res,"ether"));}); //returns balances of account2
