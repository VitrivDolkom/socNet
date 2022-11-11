import s from "@/styles/App.module.scss";
import "@/styles/index.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <div className={s.app}>
            <Header />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Content />} />
            </Routes>
        </div >
    )
}

export default App;
