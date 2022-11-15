import UsersMessage from "@/components/UsersMessage/UsersMessage";
import s from "./s.module.scss";

const Messenger = () => {
    return (
        <div className={`${s.wrap} `}>
            <UsersMessage />
        </div>
    );
}

export default Messenger;