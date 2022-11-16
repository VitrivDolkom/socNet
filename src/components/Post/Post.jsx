import s from "./s.module.scss";

const Post = ({ index, text, deletePost }) => {

    return (
        <li className={s.element}>
            <img className={s.image}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/An_Post_logo.svg/2560px-An_Post_logo.svg.png"
                alt="post image" />
            <div>{text}</div>
            <button onClick={() => deletePost(index)}>Delete post</button>
        </li>
    );
}

export default Post;