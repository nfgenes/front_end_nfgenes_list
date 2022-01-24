import { Link } from "react-router-dom";

export const ConnectBtn = ({ connect }) => {
    return (
        <>
            <button
                type="button"
                onClick={() => connect()}
            >
                <Link to="/install-wallet">Connect</Link>
            </button>
        </>
    )
}