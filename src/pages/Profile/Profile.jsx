import Posts from "@/components/Posts/Posts";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import s from "./s.module.scss";





const Profile = ({ userPosts }) => {

    return (
        <div className={`${s.profile} `}>
            <ProfileInfo />
            <Posts userPosts={userPosts} />
        </div >
    );
}

export default Profile;