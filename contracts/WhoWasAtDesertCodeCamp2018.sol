pragma solidity ^0.4.24;

contract WhoWasAtDesertCodeCamp2018 {
  string[34] public attendees;
  uint256 private currentIndex = 0;

  function howManyWereHere()
    public
    view
    returns (uint256)
  {
    return attendees.length;
  }


  function wasHere(string name)
    public
  {
    require(currentIndex<attendees.length);
    attendees[currentIndex] = name;
    currentIndex++;
  }


}
