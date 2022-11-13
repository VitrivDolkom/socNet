import s from "./s.module.scss";

const Post = () => {
    return (
        <li>
            <img className={s.image}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/An_Post_logo.svg/2560px-An_Post_logo.svg.png"
                alt="post image" />
            <div>I`m post</div>
        </li>
    );
}

export default Post;