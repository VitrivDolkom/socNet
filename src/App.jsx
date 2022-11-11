import { useState } from "react";
import s from "@/styles/App.module.scss";
import "@/styles/index.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

function App() {
    return (
        <div className={s.app}>
            <Header />
            <Sidebar />
            <Content />
        </div>
    )
}

export default App;
