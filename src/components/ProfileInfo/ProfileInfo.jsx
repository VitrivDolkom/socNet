import { useContext, useState } from "react";
import s from "./s.module.scss";


const ProfileInfo = () => {


    return (
        <div className={s.wrap}>
            <img className={s.avatar}
                src="https://avatars.mds.yandex.net/i?id=306c1349695df0754814e2d921ef4f17-5235884-images-thumbs&n=13&exp=1" alt="avatar" />
            <div className={s.about}>I`m Andrey ...</div>
            <textarea
                className={s.post} placeholder="Hello, today I..."
                cols="30" rows="4"></textarea>
            <button className={s.addPost} onClick={() => addNewPost()}>New post</button>
        </div >
    );
}

export default ProfileInfo;