const { expect } = require("chai");
const { ethers } = require("hardhat");

let ForgToken;
let forgtoken;
let deployer;
let addr1;

describe("Test FrogToken contract", async function() {
    ForgToken = await ethers.getContractFactory("FrogToken");
})



