import { ethers } from "ethers";
import { contractABI, contractAddress } from "../constants/contractConstants";

export const getContractSigner = () => {
    try {
        const _provider = new ethers.providers.Web3Provider(window.ethereum);
        const _signer = _provider.getSigner();
        const _contractSigner = new ethers.Contract(contractAddress, contractABI, _signer);
        return _contractSigner;
    } catch (e) {
        console.log("No provider is available");
    }
}

export const getContractProvider = () => {
    try {
        const _provider = new ethers.providers.Web3Provider(window.ethereum);
        const _contractProvider = new ethers.Contract(contractAddress, contractABI, _provider);
        return _contractProvider;
    } catch (e) {
        console.log("No provider is available");
    }
}

// Contract Methods

export const updateGeneListContract = async (_geneList) => {
    try {
        let _signer = getContractSigner();
        await _signer.updateGeneList(_geneList);
        return true;
    } catch (e) {
        console.log("cannot update list", e);
        return false;
    }
}

export const getGeneList = async () => {
    try {
        let _provider = getContractProvider();
        let _geneList = await _provider.geneList();
        return _geneList;
    } catch (e) {
        console.log(e);
        return false;
    }
}