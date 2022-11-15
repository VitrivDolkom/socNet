import User from "@/atoms/User/User";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./s.module.scss";

const dialogs = ["Dima", "Andrey", "Vika", "Sasha"];

const UsersMessage = () => {
    const navigate = useNavigate();
    const [dialog, setDialog] = useState("Dima");

    const routeToDialog = (name) => {
        setDialog(name);
        navigate(`/Messenger/${name}`);
    }
    return (
        <ul className={`${s.userList}`}>
            {
                dialogs.map((name, index) => {
                    return (<User key={index}
                        name={name}
                        changeDialog={() => routeToDialog(name)}
                        currentDialog={dialog} />);
                })
            }

        </ul>
    );
}

export default UsersMessage;