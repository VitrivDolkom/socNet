import User from "@/atoms/User/User";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./s.module.scss";

const dialogs = ["Dima", "Andrey", "Vika", "Sasha"];

const UsersMessage = () => {
    const navigate = useNavigate();
    const [dialog, setDialog] = useState();

    const routeToDialog = (name) => {

        navigate(`/Messenger/${name}`);
    }

    return (
        <ul className={`${s.userList}`}>
            {
                dialogs.map((name, index) => {
                    return (<User
                        key={index}
                        name={name}
                        changeDialog={() => routeToDialog(name)}
                    />);
                })
            }

        </ul>
    );
}

export default UsersMessage;