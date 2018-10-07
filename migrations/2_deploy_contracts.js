var Migrations = artifacts.require("./Migrations.sol");
var WhoWasAtDesertCodeCamp2018 = artifacts.require("./WhoWasAtDesertCodeCamp2018.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(WhoWasAtDesertCodeCamp2018);
};
