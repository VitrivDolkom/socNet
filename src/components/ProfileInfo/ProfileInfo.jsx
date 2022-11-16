import { PostsContext } from "@/pages/Profile/Profile";
import { useContext, useState } from "react";
import s from "./s.module.scss";


const ProfileInfo = () => {
    const [postText, setPostText] = useState("");
    const { setPostsList } = useContext(PostsContext);

    const addNewPost = () => {
        if (!postText) {
            alert("It is forbidden to send empty post");
            return;
        }
        setPostsList(prev => [...prev, postText]);
        console.log(postText);
        setPostText("");
    }
    return (
        <div>
            <img className={s.avatar}
                src="https://avatars.mds.yandex.net/i?id=306c1349695df0754814e2d921ef4f17-5235884-images-thumbs&n=13&exp=1" alt="avatar" />
            <textarea
                placeholder="Hello, today I..."
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                cols="30" rows="4"></textarea>
            <button onClick={() => addNewPost()}>New post</button>
        </div >
    );
}

export default ProfileInfo;