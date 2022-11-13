import { Link } from "react-router-dom";
import s from "./s.module.scss";


const Header = () => {
    return (
        <header className={s.header}>
            <Link to="/">
                <img className={`${s.logo}`}
                    src="https://avatars.mds.yandex.net/i?id=fec06be7213d1259d960cde8543a987ee556cbf2-4698303-images-thumbs&n=13&exp=1" alt="" />
            </Link>
            Header
        </header>
    );
}

export default Header;