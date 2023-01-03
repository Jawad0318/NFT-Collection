const { ethers } = require("hardhat");
require("dotenv").config();
const {
  WHITELIST_CONTRACT_ADDRESS,
  METADATA_URL,
} = require("../constants/index");
async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL = METADATA_URL;

  const cryptoDevsContract = await ethers.getContractFactory("cryptoDev");

  const deploycryptoDevContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );
  await deploycryptoDevContract.deployed();

  console.log("Crypto Devs contract address", deploycryptoDevContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
