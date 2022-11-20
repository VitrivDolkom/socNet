import UsersMessage from "@/components/UsersMessage/UsersMessage";
import s from "./s.module.scss";





const Messenger = ({ usersDialog }) => {




    return (
        <div className={`${s.wrap} `}>
            <UsersMessage
                allUsers={usersDialog}
            />
        </div>
    );
}

export default Messenger;