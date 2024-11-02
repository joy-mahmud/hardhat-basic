require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
const privateKey=process.env.PRIVATE_KEY
// Task to list accounts
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    const balance = await hre.ethers.provider.getBalance(account.address);
    // console.log(account)
    console.log(`${account.address}: ${balance}`);

  }
});
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.27",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // Optional: Configuration for the Hardhat network
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/gYK39zY8n-gZQLIvuZTnAmeJ1n0ulNJS`,
      accounts: [`${privateKey}`]
    }
  },
};
