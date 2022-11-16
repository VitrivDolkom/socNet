import s from "./s.module.scss";


const Message = ({ text }) => {
    return (
        <div className={s.item}>{text}</div>
    );
}

export default Message;