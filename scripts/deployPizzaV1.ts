// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, upgrades } from "hardhat";
import process from "process";
// import { kmsSigner } from "../common";

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

const SLICES = 8;

async function main() {
  // const signer = kmsSigner();
  // const Pizza = await ethers.getContractFactory("Pizza", signer);
  const Pizza = await ethers.getContractFactory("Pizza");

  console.log("Deploying Pizza...");

  const pizza = await upgrades.deployProxy(Pizza, [SLICES], {
    initializer: "initialize",
  });
  await pizza.deployed();

  console.log("Pizza deployed to:", pizza.address);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    throw error;
  });
