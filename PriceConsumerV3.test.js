const { expect } = require("chai");

describe("PriceConsumerV3", function () {
    it("Should return the latest price", async function () {
        const priceConsumer = await ethers.getContractFactory("PriceConsumerV3");
        const deployed = await priceConsumer.deploy();
        expect(await deployed.getLatestPrice()).to.be.above(0);
    });
});
