import { useContext, useEffect, useState } from "react";
import { WalletContext } from "../context/WalletContext";
import { getGeneList } from "../contracts/contractAPI";

export const GetGeneList = () => {
    const walletContext = useContext(WalletContext);
    const [currentHash, setCurrentHash] = useState(null);

    useEffect(() => {
        let mounted = true;

        if (walletContext.state.correctNetwork) {
            console.log("correct network");
        }

        return function cleanup() {
            mounted = false;
        }
    }, [walletContext.state.correctNetwork]);

    const fetchGeneList = async () => {
        console.log('fetching the current IPFS hash');
        try {
            const result = await getGeneList();
            setCurrentHash(result);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <p>Current genes list IPFS hash: {currentHash}</p>
            <p><a href={`http://ipfs.io/ipfs/${currentHash}`} target="_blank">IPFS Data</a></p>
            <button onClick={fetchGeneList}>Get list</button>
        </div>
    )
}