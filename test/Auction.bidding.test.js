// const assert = require('assert');
// const ganache = require('ganache-cli');
// const Web3 = require('web3');
// const web3 = new Web3(ganache.provider({ gasLimit: 10000000 }));
 
// const compiledAuction = require('../ethereum/build/Auction_v2.json');
// const compiledBox = require('../ethereum/build/AuctionBox_v2.json');
// /* current time */
// const moment = require('moment');
// const { SSL_OP_EPHEMERAL_RSA } = require('constants');
// require('moment-timezone');
// moment.tz.setDefault("Asia/Seoul");

// let accounts = [];
// let factory = null;
// let auctionAddress = null;
// let auction = null;
 
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
  

// beforeEach(async () => {
//     var auction_endate = moment().add(15, 'seconds').format('YYYY-MM-DD HH:mm:ss');
//     console.log(auction_endate);
//     accounts = await web3.eth.getAccounts();
// //    console.log(accounts);
//     box = await new web3.eth.Contract(compiledBox.abi)
//         .deploy({ data: '0x' + compiledBox.evm.bytecode.object })
//         .send({
//             from: accounts[0],
//             gas: '10000000',
//         });
    
//     await box.methods.createAuction('1',moment(auction_endate).unix()).send({
//         from: accounts[0],
//         gas: '1000000',
//     });
 
//     // Only one contract deployed, so this is safe.
//     [auctionAddress] = await box.methods.getDeployedAuctions().call();
 
//     auction = await new web3.eth.Contract(compiledAuction.abi, auctionAddress);

//     console.log(accounts[1]);

//     let result = await auction.methods.receiveDeposit().send({
//         from: accounts[1],
//         value: web3.utils.toWei('1', 'ether'),
//         gas: 6721975
//     });
// //        console.log(result);
//     let receiveDeposit = await auction.methods.deposit(accounts[1]).call();
// //        console.log(receiveDeposit);
//     assert.ok(receiveDeposit);

//     result = await auction.methods.receiveDeposit().send({
//         from: accounts[2],
//         value: web3.utils.toWei('1', 'ether'),
//         gas: 6721975
//     });
// //        console.log(result);
//     receiveDeposit = await auction.methods.deposit(accounts[2]).call();
// //        console.log(receiveDeposit);
//     assert.ok(receiveDeposit);

//     await auction.methods.bid(web3.utils.toWei('0.01', 'ether')).send({
//         gas: '6721975',
//         from: accounts[1]
//     });

//     bidNum = await auction.methods.bids(accounts[1]).call();
//     console.log(bidNum);
//     assert.ok(bidNum);

//     await auction.methods.bid(web3.utils.toWei('0.02', 'ether')).send({
//         gas: '6721975',
//         from: accounts[2]
//     });

//     bidNum = await auction.methods.bids(accounts[2]).call();
//     console.log(bidNum);
//     assert.ok(bidNum);
// });
 
// describe('Bids and successful bid', () => {
 
//     it('look up the highest bid', async () => {

//         await sleep(15000);

//         console.log(accounts[2]);

//         await auction.methods.successfulBid().send({
//             from: accounts[2],
//             value: web3.utils.toWei('0.02', 'ether'),
//             gas: 6721975
//         });

//         const auctionInstance = await auction.methods.a().call();
//         console.log(auctionInstance[3]);
       
//         assert.equal(auctionInstance[3], web3.utils.toWei('0.02', 'ether'));
//     });

//     it('redeem the deposit', async () => {

//         await sleep(15000);

//         console.log(accounts[2]);

//         await auction.methods.refundDeposit().send({
//             from: accounts[2],
//             value: web3.utils.toWei('0.02', 'ether'),
//             gas: 6721975
//         });

//         const remainingDeposit = await auction.methods.deposit(accounts[2]).call();
//         console.log(remainingDeposit);
       
//         assert.equal(remainingDeposit, 0);
//     });


// });