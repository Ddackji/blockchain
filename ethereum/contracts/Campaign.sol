pragma solidity ^0.6.6;

contract AuctionBox_v2{
    event AuctionCreated(Auction_v2 auctionContract, uint dbid);
    address[] public deployedAuctions;
  
    function getDeployedAuctions() public view returns(address [] memory) {
       return deployedAuctions;
    }
    
    function createAuction(uint _dbid, uint _biddingTime) public returns(Auction_v2) {
        Auction_v2 newAuction = new Auction_v2(msg.sender,_dbid,_biddingTime);
        emit AuctionCreated(newAuction,_dbid);
        deployedAuctions.push(address(newAuction));

        return newAuction;
    }
}

contract Auction_v2{

    struct auction{
        address payable owner;              
        address theBidWinner;              
        uint DBID;                         
        uint theWinningBid;            
    }

    uint  public auctionEnd;             
    address public highestBidder;            
    uint public highestBids;              
    address public manager;

    auction public a;                            

    mapping(address=>uint) public deposit;        
    mapping(address=>uint) public bids;          

    bool locked;                                 

    modifier noReentrancy(){
        require(!locked,"Reentrant call");
        locked = true;
        _;
        locked= false;
    }

    
    constructor(address payable _owner,uint _dbid, uint _biddingTime)public{
        a.owner = _owner;
        manager = _owner;
        a.DBID = _dbid;
        auctionEnd = _biddingTime;
    }

    function receiveDeposit() public payable {
        require(now <= auctionEnd, "The auction has been closed.");
        deposit [msg.sender] = msg.value;
    }// does it receive the fund? 
    
    function bid(uint _bid) noReentrancy public{
        require(now <= auctionEnd, "The auction has been closed.");
        require(_bid> highestBids, "It's smaller than the highestBids.");
        require(deposit[msg.sender]>0,"You didn't pay the deposit.");
        bids[msg.sender] = _bid;
        highestBidder = msg.sender;
        highestBids = _bid;
    }


    function successfulBid()public payable{
        require(now > auctionEnd, "The auction don't close.");
        require(msg.sender==highestBidder,"You not highestBidder");
        require(msg.value == highestBids, "Send a different amount from the winning bid");
        require(a.theWinningBid==0,"You've already make a successful bid");
        a.theBidWinner = msg.sender;
        a.theWinningBid = highestBids;
        a.owner.transfer(highestBids);
    }

    function refundDeposit() public payable{
        require(now >=auctionEnd, "The auction don't close.");
        require(deposit[msg.sender]>0,"You've already received Ether");
        uint value = deposit[msg.sender];
        deposit[msg.sender]=0;
        msg.sender.transfer(value);
    }
}