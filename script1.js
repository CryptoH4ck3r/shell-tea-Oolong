const ethers = require('ethers');

function createRandomWallet() {
    const wallet = ethers.Wallet.createRandom();
    console.log(`Wallet Address: ${wallet.address}`);
    console.log(`Private Key: ${wallet.privateKey}`);
}

module.exports = createRandomWallet;
