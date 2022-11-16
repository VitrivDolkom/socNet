import s from "./s.module.scss";

const ToDialog = ({ changeDialog, name }) => {

    return (
        <li
            className={`${s.item}`}
            onClick={() => changeDialog(name)}>{name}</li>
    );
}

export default ToDialog;