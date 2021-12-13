import web3 from "./web3";
import AuctionBox_V2 from "./build/AuctionBox_v2.json";

const box = new web3.eth.Contract(
  JSON.parse(AuctionBox_V2.interface),
  '0x93AbF7D0f62fc7c3Efa092Ff0d1a0EC1D1E2De8F'
);

export default box;
