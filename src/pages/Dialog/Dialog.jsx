import { useNavigate } from "react-router-dom";
import s from "./s.module.scss";

const Dialog = ({ }) => {
    const navigate = useNavigate();
    return (
        <div className={s.dialog}>
            <button onClick={() => navigate("/Messenger")}
                className={s.back}>Back</button>
            Hello
        </div>
    );
}

export default Dialog;