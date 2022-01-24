import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Main = () => {
    return (
        <div>
            <div>
                <div>
                    <Navbar />
                    <div>
                        <Outlet />
                    </div>
                    
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}