// require('dotenv').config({ path: '../.env' });

// const assert = require('assert');
// const ganache = require('ganache-cli');
// const Web3 = require('web3');
// const compiledBox = require('../ethereum/build/AuctionBox_v2.json');
// const compiledAuction = require('../ethereum/build/Auction_v2.json');

// let web3;

// if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
//   // We are in the browser and metamask is running.
//   window.ethereum.request({ method: "eth_requestAccounts" });
//   web3 = new Web3(window.ethereum);
// } else {
//   // We are on the server *OR* the user is not running metamask
//   const provider = new Web3.providers.HttpProvider(
//     process.env.INFURA_ENDPOINT
//     //"https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c"
//   );
//   web3 = new Web3(provider);
// }

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

//     const box = new web3.eth.Contract(
//       compiledBox.abi,
//       '0x30c61267fa0b6d0676f19ec9d8Ed27f834c7f823'
//     );

//     await box.methods.createAuction('1',moment(auction_endate).unix()).send({
//         from: accounts[0],
//         gas: '1000000',
//     });
 
//     // Only one contract deployed, so this is safe.
//     [auctionAddress] = await box.methods.getDeployedAuctions().call();
 
//     auction = await new web3.eth.Contract(compiledAuction.abi, auctionAddress);

// });
 
// describe('Deploy the Auctions to Hodu Net', () => {
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