require('dotenv').config({ path: '../.env' });
 
//const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledABox = require('./build/AuctionBox_v2.json');
const provider = new Web3.providers.HttpProvider(
  process.env.INFURA_ENDPOINT
  //"https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c"
);
//const provider = new HDWalletProvider(process.env.WALLET_MNEMONIC, process.env.INFURA_ENDPOINT);
const web3 = new Web3(provider);
 
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    let txn;
    console.log('Attempting to deploy using account ' + accounts[0]);
    console.log('abi ' + compiledABox.abi); 
//    console.log('bytecode ' + compiledABox.evm.bytecode.object); 
    try{
      txn = await new web3.eth.Contract(compiledABox.abi)
          .deploy({ data: '0x' + compiledABox.evm.bytecode.object })
          .send({ from: accounts[0] });
    }
    catch(err){
      console.log(err.message);
    }
 
    console.log('Contract is at ' + txn.options.address);
    //provider.engine.stop();
};
deploy();


// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const Web3 = require('web3');
// const compiledBox = require('./build/AuctionBox_v2.json');

// const provider = new HDWalletProvider(
//   'logic emotion fluid mandate recall toss matter strategy seat security gown orient',
//   // remember to change this to your own phrase!
//   'http://211.106.28.192:8545'
//   // remember to change this to your own endpoint!
// );
// const web3 = new Web3(provider);

// const deploy = async () => {

//   let abi = new web3.eth.Contract(JSON.parse(JSON.stringify(compiledBox.abi)));
//   let bytecode = '0x' + contract.evm.bytecode.object;
//   let gasEstimate = await web3.eth.estimateGas({data: bytecode});

//   const accounts = await web3.eth.getAccounts();

//   console.log('Attempting to deploy from account', accounts[0]);

//   const result = await new web3.eth.Contract(
//     JSON.parse(compiledBox.interface)
//   ).deploy({ data: compiledBox.bytecode }).send({ gas: '1000000', from: accounts[0] });

//   console.log('Contract deployed to', result.options.address);
//   provider.engine.stop();
// };
// deploy();


