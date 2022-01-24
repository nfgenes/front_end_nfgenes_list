import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";
import { WalletContext } from "../context/WalletContext";
import { useContext } from "react";
import { InstallWalletBtn } from "./InstallWalletBtn";

export const Navbar = () => {
    const walletContext = useContext(WalletContext);

    return (
        <div>
            <div>
                <h1>NFgenes List</h1>
            </div>
            <div>
                <button
                    type="button"
                >
                    <Link to="/">Home</Link>
                </button>
                <button
                    type="button"
                >
                    <Link to="/about">About</Link>
                </button>
                {walletContext.state.walletInstalled ? <NavItems /> : <InstallWalletBtn />}
            </div>
        </div>
    )
}