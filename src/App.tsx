import "./styles/App.css";
import { Header } from "./components/HeaderComponents/Header";
import { Main } from "./components/MainComponents/Main";
import { Footer } from "./components/FooterComponents/Footer";
import { useState } from "react";

function App() {
    const [search, setSearch] = useState("");
    return (
        <>
            <Header search={search} setSearch={(v: string) => setSearch(v)} />
            <Main />
            <Footer />
        </>
    );
}

export default App;
