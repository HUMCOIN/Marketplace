pragma solidity ^0.5.9;

import "./Project.sol";

contract ProjectHandler is Project {

    function getInvestors() public view returns (address[] memory)  {
      return _investors;
    }

    function checkInvestorParticipation(address _investor) public view returns (uint) {
      return _investorsParticipation[_investor];
    }
}
