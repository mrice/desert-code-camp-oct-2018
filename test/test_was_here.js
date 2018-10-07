const WhoWasAtDesertCodeCamp2018 = artifacts.require("WhoWasAtDesertCodeCamp2018");

contract("WhoWasAtDesertCodeCamp2018", async(accounts) => {
  const currentAccount = accounts[0];

  it("lets me know how many attended", async() => {
    const wasHereInstance = await WhoWasAtDesertCodeCamp2018.deployed();
    const number = await wasHereInstance.howManyWereHere();
    assert.equal(number, 34);
  });

  it("lets me add a name to the roster", async() => {
    const wasHereInstance = await WhoWasAtDesertCodeCamp2018.deployed();
    const tx = await wasHereInstance.wasHere.sendTransaction("michael", {from: currentAccount});
    assert.isOk(tx);

    const nameOnTheChain = await wasHereInstance.attendees(0);
    assert.equal("michael", nameOnTheChain);
  })

});
