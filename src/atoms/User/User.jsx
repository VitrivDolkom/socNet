import s from "./s.module.scss";

const User = ({ currentDialog, changeDialog, name }) => {
    return (
        <li
            className={`${s.item} ${currentDialog === name ? s.active : ""}`}
            onClick={() => changeDialog()}>{name}</li>
    );
}

export default User;