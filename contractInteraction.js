const contract = new web3.eth.Contract(abi, contractAddress);

async function getLatestPrice() {
    const price = await contract.methods.getLatestPrice().call();
    console.log('Latest Price:', price);
}
