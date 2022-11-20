import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/styles/_default.scss";
import { BrowserRouter } from "react-router-dom";


let allMessages = [
    { id: 1, text: "Hi" },
    { id: 2, text: "How are you?" },
    { id: 3, text: "I`m fine" },
    { id: 4, text: "And you?" },
    { id: 5, text: "Buy" },
    { id: 6, text: "Buy" },
];


let usersDialog = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Andrew" },
    { id: 4, name: "Vika" }
];

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter basename="">
            <App
                allMessages={allMessages}
                usersDialog={usersDialog} />
        </BrowserRouter>
    </React.StrictMode>
);

