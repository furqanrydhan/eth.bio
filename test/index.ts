import { expect } from "chai";
import { ethers } from "hardhat";

describe("Eth.bio", function () {
  it("basic eth.bio tests", async function () {
    const EthBio = await ethers.getContractFactory("EthBio");
    const ethBio = await EthBio.deploy();
    await ethBio.deployed();

    expect(await ethBio.getBio(""));
  });
});
