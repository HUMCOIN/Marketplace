pragma solidity ^0.5.9;

import './Project.sol';

contract ProjectHandler is Project {
    function getInvestors() public view returns (address[] memory) {
        return investors;
    }

    function checkInvestorParticipation(address _investor) public view returns (uint256) {
        return investorsParticipation[_investor];
    }
}
