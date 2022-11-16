import Message from "@/atoms/Message/Message";
import { useNavigate } from "react-router-dom";
import s from "./s.module.scss";

const Dialog = ({ }) => {
    const navigate = useNavigate();
    return (
        <div className={s.dialog}>
            <div onClick={() => navigate("/Messenger")}
                className={s.back}>Back</div>
            <Message text="Hello1" />
            <Message text="Hello2" />
            <Message text="Hello3" />
            <Message text="Hello4" />
        </div>
    );
}

export default Dialog;