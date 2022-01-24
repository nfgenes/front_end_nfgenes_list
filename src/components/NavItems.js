import { useContext } from "react";
import { Link } from "react-router-dom";
import { WalletContext } from "../context/WalletContext";
import { ConnectBtn } from "./ConnectBtn";

export const NavItems = () => {
    const walletContext = useContext(WalletContext);

    const connect = async () => {
        const ethereum = window.ethereum;

        try {
            await ethereum.request({method: 'eth_requestAccounts'});
        } catch (e) {
            console.log("Unable to request access to wallet");
        }
    }

    return (
        <>
            {
                walletContext.state.currentAccount.length > 0 ?
                    <>
                        <button type="button">
                            <Link to="/getGeneList">Get Current Gene List</Link>
                        </button>
                        <button type="button">
                            <Link to="/updateGeneList">Update Gene List</Link>
                        </button>
                    </>
                    :
                    <ConnectBtn connect={connect} />
            }
        </>
    )
}