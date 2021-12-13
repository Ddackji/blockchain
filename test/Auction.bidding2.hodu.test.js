// require('dotenv').config({ path: '../.env' });

// const assert = require('assert');
// const ganache = require('ganache-cli');
// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const compiledBox = require('../ethereum/build/AuctionBox_v2.json');
// const compiledAuction = require('../ethereum/build/Auction_v2.json');

// const Web3 = require('web3');
// const provider = new Web3.providers.HttpProvider("http://localhost:8545");
//     //"https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c"
  
// const web3 = new Web3(provider);
// // We are on the server *OR* the user is not running metamask

// // if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
// //   // We are in the browser and metamask is running.
// //   window.ethereum.request({ method: "eth_requestAccounts" });
// //   web3 = new Web3(window.ethereum);
// // } else {
// //   // We are on the server *OR* the user is not running metamask
// //   const provider = new Web3.providers.HttpProvider(
// //     process.env.WALLET_MNEMONIC, 
// //     process.env.INFURA_ENDPOINT
// //     //"https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c"
// //   );
// //   web3 = new Web3(provider);
// // }

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
  
// let myaccount_1, myaccount_2, gasValue;

// beforeEach(async () => {
 
//     var auction_endate = moment().add(90, 'seconds').format('YYYY-MM-DD HH:mm:ss');
//     console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
//     console.log(auction_endate);
//     accounts = await web3.eth.getAccounts();
//     console.log(accounts);
//     myaccount_1 = accounts[1];
//     myaccount_2 = accounts[2];
//     gasValue = '5000000';
    
// //    console.log(accounts);
//     const box = new web3.eth.Contract(
//         compiledBox.abi,
//         '0x30c61267fa0b6d0676f19ec9d8Ed27f834c7f823'
//     );
//     console.log("Gas Price: ")
//     web3.eth.getGasPrice().then(console.log);

//     await box.methods.createAuction('1',moment(auction_endate).unix()).send({
//         from: accounts[0],
//         gas: gasValue
//     });
 
//     // Only one contract deployed, so this is safe.
//     [auctionAddress] = await box.methods.getDeployedAuctions().call();
//     console.log("AuctionAddress:", auctionAddress);

//     auction = await new web3.eth.Contract(compiledAuction.abi, auctionAddress);

//     console.log(myaccount_1);
    
//     console.log("Here is the line 79");
//     console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
//     console.log(auction_endate);

//     let result;
//     try {
//          result = await auction.methods.receiveDeposit().send({
//             from: myaccount_1,
//             value: web3.utils.toWei('0.1', 'ether'),
//             gas: gasValue
//         });
//     }
//     catch (err) {
//         console.log(err.message);
//   }

//     console.log("Here is the line 93");
//     console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
//     console.log(auction_endate);

//     let receiveDeposit = await auction.methods.deposit(myaccount_1).call();
//     console.log("deposit received", receiveDeposit);
//     assert.ok(receiveDeposit);

//     console.log("Here is the line 99");

// // //     result = await auction.methods.receiveDeposit().send({
// // //         from: myaccount_2,
// // //         value: web3.utils.toWei('0.2', 'ether'),
// // //         gas: gasValue
// // //     });

// // //     receiveDeposit = await auction.methods.deposit(myaccount_2).call();
// // // //        console.log(receiveDeposit);
// // //     assert.ok(receiveDeposit);

// // //     console.log("Here is the line 113");
    
// //     await auction.methods.bid(web3.utils.toWei('0.1', 'ether')).send({
// //         gas: gasValue,
// //         from: myaccount_1
// //     });

// //     bidNum = await auction.methods.bids(myaccount_1).call();
// //     console.log(bidNum);
// //     assert.ok(bidNum);

// //     await auction.methods.bid(web3.utils.toWei('0.2', 'ether')).send({
// //         gas: gasValue,
// //         from: myaccount_2
// //     });

// //     console.log("Here is the line 127");
    
// //     bidNum = await auction.methods.bids(myaccount_2).call();
// //     console.log(bidNum);
// //     assert.ok(bidNum);
// });
 
// describe('Bids and successful bid in HODU-Net', () => {
 
//     it('look up the highest bid in HODU-Net', async () => {

//         await sleep(30000);

//         console.log("here is 144 line");

//         console.log(myaccount_1);

//         await auction.methods.successfulBid().send({
//             from: myaccount_1,
//             value: web3.utils.toWei('0.2', 'ether'),
//             gas: gasValue
//         });

//         const auctionInstance = await auction.methods.a().call();
//         console.log("bidding result");
//         console.log(auctionInstance[3]);
       
//         assert.equal(auctionInstance[3], web3.utils.toWei('0.2', 'ether'));
//     });

//     // it('redeem the deposit in HODU-Net', async () => {

//     //     await sleep(15000);

//     //     console.log(myaccount_2);

//     //     await auction.methods.refundDeposit().send({
//     //         from: myaccount_2,
//     //         value: web3.utils.toWei('0.2', 'ether'),
//     //         gas: gasValue
//     //     });

//     //     const remainingDeposit = await auction.methods.deposit(myaccount_2).call();
//     //     console.log("remaining deposit", remainingDeposit);
       
//     //     assert.equal(remainingDeposit, 0);
//     // });


// });