import Links from "../Links/Links";
import s from "./s.module.scss";


const Sidebar = () => {

    return (
        <div className={s.sidebar}>
            <Links />
        </div>
    );
}

export default Sidebar;