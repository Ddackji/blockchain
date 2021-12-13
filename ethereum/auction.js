import web3 from "./web3";
import Auction_v2 from "./build/Auction_v2.json";

const campaign = (address) => {
  return new web3.eth.Contract(JSON.parse(Auction_v2.interface), address);
};
export default campaign;
