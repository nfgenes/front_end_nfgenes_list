import { contractAddress } from '../constants/contractConstants.js';

export const Footer = () => {
    return (
        <div>
            <div>
                <a  href={`https://rinkeby.etherscan.io/address/${contractAddress}`} target="_blank" rel="noreferrer">Contract Address</a>
            </div>
            <div>
                <a  href="https://github.com/nfgenes/front_end_nfgenes_list" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
        </div>
    )
}