import ToDialog from "@/atoms/ToDialog/ToDialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./s.module.scss";


const UsersMessage = ({ allUsers }) => {
    const navigate = useNavigate();
    const [dialog, setDialog] = useState();

    let usersList = allUsers.
        map(person => {
            return (<ToDialog
                key={person.id}
                name={person.name}
                changeDialog={() => routeToDialog(person.name)}
            />);
        })

    const routeToDialog = (name) => {
        navigate(`/Messenger/${name}`);
    }

    return (
        <ul className={`${s.userList}`}>
            {usersList}
        </ul>
    );
}

export default UsersMessage;