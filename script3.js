const ethers = require('ethers');

async function getCurrentGasPrice() {
    const provider = ethers.getDefaultProvider();
    const gasPrice = await provider.getGasPrice();
    console.log(`Current gas price: ${ethers.utils.formatUnits(gasPrice, 'gwei')} gwei`);
}

module.exports = getCurrentGasPrice;
