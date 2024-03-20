const ethers = require('ethers');

function connectToMainnet() {
    const provider = ethers.getDefaultProvider();
    console.log(`Connected to network: ${provider._network.name}`);
}

module.exports = connectToMainnet;
