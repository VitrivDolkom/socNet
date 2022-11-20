import Post from "../Post/Post";
import s from "./s.module.scss";



const Posts = ({ userPosts }) => {


    return (
        <div className="">
            <ul className={s.list}>
                {userPosts.map(post => {
                    return (<Post
                        key={post.id}
                        text={post.text}
                        index={post.id}
                        deletePost={(i) => removePost(i)} />);
                })}
            </ul>
        </div>
    );
}

export default Posts;