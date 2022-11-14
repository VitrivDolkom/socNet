import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToPages from "../ToPages/ToPages";
import s from "./s.module.scss";

const sideBarLinks = ["Profile", "Messenger", "News", "Music", "Settings"];


const Links = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState("");

    const routeToPage = (path) => {
        setCurrentPage(path);
        navigate(`/${path}`);
    }

    return (
        <ul className={s.list}>
            {sideBarLinks.map((title, i) => {
                return (
                    <ToPages
                        key={i}
                        title={title}
                        changePage={() => routeToPage(title)}
                        page={currentPage}
                    />);
            })}
        </ul>
    );
}

export default Links;