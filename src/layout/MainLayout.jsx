import { Outlet } from "react-router";
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const MainLayout = () => {
    return (
        <>
            <Nav />
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
};
