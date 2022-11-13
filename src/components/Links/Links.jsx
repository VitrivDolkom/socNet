import { useState } from "react";
import { Link } from "react-router-dom";
import ToPages from "../ToPages/ToPages";
import s from "./s.module.scss";

const sideBarLinks = ["Profile", "Message", "Blog", "Users", "Feed", "Friends"];


const Links = () => {
    const [currentPage, setCurrentPage] = useState("");


    return (
        <ul className={s.list}>
            {sideBarLinks.map((title, i) => {
                return (<ToPages
                    key={i}
                    title={title}
                    changePage={() => setCurrentPage(title)}
                    page={currentPage}
                />);
            })}
        </ul>
    );
}

export default Links;