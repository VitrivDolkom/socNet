import { Link } from "react-router-dom";
import s from "./s.module.scss";

const sideBarLinks = ["Message", "Blog", "Users", "Feed", "Friends"];


const Links = () => {



    return (
        <ul className={s.list}>
            {sideBarLinks.map((title, i) => {
                return (<li key={i} className={s.link}>{title}</li>)
            })}
        </ul>
    );
}

export default Links;