import abi from '../contracts/NFgenesList.json';
export const contractAddress = '0xFb5b218698ca952FCca7e6d27955de0dF639138a'
export const contractABI = abi.abi;

export function shortenAddress(address) {
    return `${address.substring(0,6)}...${address.substring(address.length -  4)}`;
}