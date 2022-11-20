import Message from "@/atoms/Message/Message";
import { useNavigate } from "react-router-dom";
import s from "./s.module.scss";



const Dialog = ({ allMessages }) => {
    const navigate = useNavigate();



    let messagesList = allMessages.
        map(mess => {
            return <Message
                key={mess.id}
                text={mess.text} />;
        })

    return (
        <div className={s.dialog}>
            <div onClick={() => navigate("/Messenger")}
                className={s.back}>Back</div>
            {messagesList}
        </div>
    );
}

export default Dialog;