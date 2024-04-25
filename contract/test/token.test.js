const { assert, expect } = require("chai");
const { ethers, upgrades } = require("hardhat");
const { BigNumber, formatEther } = require("ethers");

describe("Uncharted", function () {
  let token;
  let account0;
  beforeEach(async function () {
    const Uncharted = await ethers.getContractFactory("Uncharted");
    [account0] = await ethers.getSigners();
    token = await upgrades.deployProxy(Uncharted,[account0.address]);
    await token.waitForDeployment();
    
  });

  it("deployment", async function () {
    const tokenAddress = token.getAddress();
    assert.notEqual(tokenAddress, 0x0);
    assert.notEqual(tokenAddress, "");
    assert.notEqual(tokenAddress, null);
    assert.notEqual(tokenAddress, undefined);
    const currentBalance = await token.balanceOf(account0.address);
    assert.equal(
      formatEther(currentBalance),
      formatEther(1000000000000000000000000000n)
    );
  });

});