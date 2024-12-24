async function getGasPrice() {
    const gasPrice = await web3.eth.getGasPrice();
    console.log('Gas Price:', gasPrice);
}

async function getBalance(address) {
    const balance = await web3.eth.getBalance(address);
    console.log('Balance:', web3.utils.fromWei(balance, 'ether'));
}

async function sendEther(from, to, amount, privateKey) {
    const tx = {
        from,
        to,
        value: web3.utils.toWei(amount, 'ether'),
        gas: 21000,
        gasPrice: await web3.eth.getGasPrice(),
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Transaction Receipt:', receipt);
}
