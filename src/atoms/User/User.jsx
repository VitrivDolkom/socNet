import s from "./s.module.scss";

const User = ({ changeDialog, name }) => {

    return (
        <li
            className={`${s.item}`}
            onClick={() => changeDialog(name)}>{name}</li>
    );
}

export default User;