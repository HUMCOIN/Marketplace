pragma solidity ^0.5.9;

interface DaiToken {
  function transfer(address dst, uint256 wad) external returns (bool);
  function balanceOf(address guy) external view returns (uint256);
}

contract Project {
  DaiToken daitoken;
  address public company;
  uint8 public value;
  uint32 public finishTime;
  address public implementer;

  constructor(address _company, uint8 _value, uint32 _finishTime) public {
    implementer = msg.sender;
    daitoken = DaiToken(0xC4375B7De8af5a38a93548eb8453a498222C4fF2);
    company = _company;
    value = _value;
    finishTime = _finishTime;
  }

  address[] investors;
  mapping(address => uint256) investorsParticipation;

  function() external payable {}

  function recieveFunds() external payable {
      address(this).transfer(msg.value);
  }

  function showETHFunds() public view returns (uint256) {
    return address(this).balance;
  }

  function withdrawDAI(uint256 _desiredAmount) public {
    // Limit withdrawal amount
    require(daitoken.balanceOf(address(this)) >= _desiredAmount, 'Insufficient balance in faucet for withdrawal request');
    // Send the amount to the address that requested it
    daitoken.transfer(address(this), _desiredAmount);
  }

  function showDAIFunds() public view returns (uint256) {
    return daitoken.balanceOf(address(this));
  }
}
