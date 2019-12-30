pragma solidity ^0.5.9;

interface DaiToken {
    function transfer(address dst, uint wad) external returns (bool);
    function balanceOf(address guy) external view returns (uint);
}

contract Project {
    DaiToken daitoken;
    address public company;
    uint8 public value;
    uint32 public finishTime;

    constructor(address _company, uint8 _value, uint32 _finishTime) public {
		daitoken = DaiToken(0xC4375B7De8af5a38a93548eb8453a498222C4fF2);
        company = _company;
        value = _value;
        finishTime = _finishTime;
    }

    address[] _investors;
    mapping(address => uint256) _investorsParticipation;

    function() external payable {}

    function recieveFunds() external payable {
        address(this).transfer(msg.value);
    }

    function showFunds() public view returns (uint256) {
        return address(this).balance;
    }

    function convertFundsToDai() public {
        daitoken.transfer(address(this), address(this).balance);
    }

    function showDaiFunds() public view returns(uint) {
        return daitoken.balanceOf(address(this));
    }
}
