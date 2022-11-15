import s from "@/styles/App.module.scss";
import "@/styles/index.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from "./pages/Profile/Profile";
import Messenger from "./pages/Messenger/Messenger";
import Music from "./pages/Music/Music";
import Settings from "./pages/Settings/Settings";
import News from "./pages/News/News";
import Dialog from "./pages/Dialog/Dialog";


function App() {
    return (
        <div className={s.app}>
            <Header />
            <Sidebar />
            <div className={s.appContent}>
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route exact path="/Messenger" element={<Messenger />} />
                    <Route path="/Messenger/*" element={<Dialog />} />
                    <Route path="/Music" element={<Music />} />
                    <Route path="/Settings" element={<Settings />} />
                    <Route path="/News" element={<News />} />
                </Routes>
            </div>
        </div >
    )
}

export default App;