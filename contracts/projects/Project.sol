pragma solidity ^0.5.9;

contract Project {
    address public company;
    uint8 public value;
    uint32 public finishTime;

    constructor(address _company, uint8 _value, uint32 _finishTime) public {
        company = _company;
        value = _value;
        finishTime = _finishTime;
    }

    address[] _investors;
    mapping(address => uint256) _investorsParticipation;

    function() external payable {}

    function recieveFunds() public payable {
        address(this).transfer(msg.value);
    }

    function showFunds() public view returns (uint256) {
        return address(this).balance;
    }
}
