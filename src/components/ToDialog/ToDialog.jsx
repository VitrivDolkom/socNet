import s from "./s.module.scss";


const ToDialog = ({ title, changePage, page }) => {
    return (
        <li onClick={() => changePage()}
            className={page === title ? `${s.item} ${s.active}` : `${s.item}`}
        >{title}</li>
    );
}

export default ToDialog;