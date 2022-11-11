import Posts from "../Posts/Posts";
import s from "./s.module.scss";

const Content = () => {
    return (
        <main className={s.content}>
            <Posts />
        </main>
    );
}

export default Content;