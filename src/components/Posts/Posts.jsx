import { PostsContext } from "@/pages/Profile/Profile";
import { useContext } from "react";
import Post from "../Post/Post";
import s from "./s.module.scss";



const Posts = () => {
    const { postsList, setPostsList } = useContext(PostsContext);


    const removePost = (i) => {
        setPostsList(prev => {
            return prev.filter((el, index) => index !== i);
        });
    }

    return (
        <div className="">
            <ul className={s.list}>
                {postsList.map((post, index) => {
                    return (<Post
                        key={index}
                        text={post}
                        index={index}
                        deletePost={(i) => removePost(i)} />);
                })}
            </ul>
        </div>
    );
}

export default Posts;