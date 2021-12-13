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

// beforeEach(async () => {
//     var auction_endate = moment().add(15, 'seconds').format('YYYY-MM-DD HH:mm:ss');
//     console.log(auction_endate);
//     accounts = await web3.eth.getAccounts();

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

// });
 
// describe('Deploy the Auctions', () => {
//     it('deploys a box and a auction', async () => {
//         assert.ok(box.options.address);
//         assert.ok(auction.options.address);
//     });
 
//     it('marks caller as the auction manager', async () => {
//         const manager = await auction.methods.manager().call();
//         console.log(manager);
//         assert.equal(manager , accounts[0]);
//     });
// });