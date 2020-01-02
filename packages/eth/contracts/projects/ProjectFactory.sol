pragma solidity ^0.5.9;

import './Project.sol';

contract ProjectFactory {
    Project[] allProjects;
    function createProject(address _company, uint8 _value, uint32 _finishTime) external returns (address) {
        Project project = new Project(_company, _value, _finishTime);
        allProjects.push(project);
        return address(project);
    }

    function getProjects() public view returns (Project[] memory) {
        return allProjects;
    }
}
