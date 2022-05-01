// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, upgrades } from "hardhat";
import * as process from "process";
// import { kmsSigner } from "../common";

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

const PROXY = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

async function main() {
  // const signer = kmsSigner();
  // const Pizza = await ethers.getContractFactory("Pizza", signer);
  const PizzaV2 = await ethers.getContractFactory("PizzaV2");
  console.log("Upgrading Pizza...");
  await upgrades.upgradeProxy(PROXY, PizzaV2);
  console.log("Pizza upgraded successfully");
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    throw error;
  });
