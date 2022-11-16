import Posts from "@/components/Posts/Posts";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import { createContext, useState } from "react";
import s from "./s.module.scss";


export const PostsContext = createContext();



const Profile = () => {
    const [postsList, setPostsList] = useState([]);

    return (
        <div className={`${s.profile} `}>
            <PostsContext.Provider value={{ postsList, setPostsList }} >
                <ProfileInfo />
                <Posts />
            </PostsContext.Provider>
        </div >
    );
}

export default Profile;