import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/styles/_default.scss";
import { BrowserRouter } from "react-router-dom";
import State from "@data/state";




ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter basename="">
            <App
                State={State} />
        </BrowserRouter>
    </React.StrictMode>
);

