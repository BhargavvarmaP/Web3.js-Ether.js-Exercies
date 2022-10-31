async function main() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const account= await provider.send("eth_requestAccounts",[]); 
    console.log(account);
    }
    main();