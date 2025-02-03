import Home from "./pages/Home";
import Details from "./pages/Details";
import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "./layout/MainLayout";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />}></Route>
                        <Route path="details/:id" element={<Details />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
