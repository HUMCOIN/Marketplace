pragma solidity ^0.5.7;

contract Project {
    function() external payable {}

    function recieveFunds() public payable {
        address(this).transfer(msg.value);
    }

    function showFunds() public view returns (uint256) {
        return address(this).balance;
    }
}
