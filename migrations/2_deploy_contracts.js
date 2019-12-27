const ProjectFactory = artifacts.require("./projects/ProjectFactory.sol");

module.exports = function(deployer) {
  deployer.deploy(ProjectFactory);
};