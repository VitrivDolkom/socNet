import Posts from "@/components/Posts/Posts";
import s from "./s.module.scss";


const Profile = () => {
    return (
        <div className={`${s.profile} section`}>
            <Posts />
        </div>
    );
}

export default Profile;