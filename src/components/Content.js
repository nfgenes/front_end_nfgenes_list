import { WalletContext } from "../context/WalletContext"
import { contractAddress } from "../constants/contractConstants"
import { useContext } from "react"

export const Content = () => {
    const walletContext = useContext(WalletContext);

    return (
        <div>
            <div>
                <p>
                    The current contract address for the NFgenes List is: {contractAddress}
                </p>
                <p>
                    You are currently connected to the {walletContext.state.currentNetwork}
                </p>
                <p>
                    You are connected with wallet address {walletContext.state.currentAccount}
                </p>
            </div>
        </div>
    )
}