import Post from "../Post/Post";
import s from "./s.module.scss";

const Posts = () => {
    return (
        <div className="">
            <ul className={s.list}>
                <Post />
                <Post />
                <Post />
                <Post />
            </ul>
        </div>
    );
}

export default Posts;