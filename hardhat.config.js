require("@nomicfoundation/hardhat-toolbox");

// Task to list accounts
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  
  for (const account of accounts) {
    const balance = await hre.ethers.provider.getBalance(account.address);
       console.log(`${account.address}: ${hre.utils.parsebalance} ETH`);

  }
});
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
      // Optional: Configuration for the Hardhat network
    },
    // Add other networks like Rinkeby, Mainnet if needed
  },
};
