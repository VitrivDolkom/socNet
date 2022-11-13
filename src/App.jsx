import s from "@/styles/App.module.scss";
import "@/styles/index.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from "./pages/Profile/Profile";
import Message from "./pages/Message/Message";


function App() {
    return (
        <div className={s.app}>
            <Header />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Message" element={<Message />} />
            </Routes>
        </div >
    )
}

export default App;
