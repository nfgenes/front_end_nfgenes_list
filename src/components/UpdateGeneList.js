import { useContext, useEffect, useRef, useState } from "react";
import { WalletContext } from "../context/WalletContext";
import { updateGeneListContract, getGeneList, getContractSigner } from "../contracts/contractAPI";

export const UpdateGeneList = () => {
    const walletContext = useContext(WalletContext);
    const [currentList, setCurrentList] = useState(null);
    const hashRef = useRef();

    useEffect(() => {
        let mounted = true;

        if (walletContext.state.correctNetwork) {
            console.log("correct network");
            fetchGeneList();
        }

        return function cleanup() {
            mounted = false;
        }
    }, [walletContext.state.correctNetwork]);

    const fetchGeneList = async () => {
        console.log('fetching the genes list');
        try {
            const result = await getGeneList();
            setCurrentList(result);
        } catch (e) {
            console.log(e);
        }
    }

    const userUpdateGeneList = async (_hash) => {
        console.log("Attempting to update the genes list");
        try {
            await updateGeneListContract(_hash);
            fetchGeneList();
        } catch (e) {
            console.log(e);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        userUpdateGeneList(hashRef.current.value);
    }

    return (
        <div>
            <p>Current genes list: {currentList}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="hash">New IPFS Hash:</label> 
                    <input id="hash" type="text" ref={hashRef} />
                <button type="submit">Update the genes list</button>
            </form>
        </div>
    )
}