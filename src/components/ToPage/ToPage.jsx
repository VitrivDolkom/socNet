import s from "./s.module.scss";


const ToPage = ({ title, changePage, page }) => {
    return (
        <li onClick={() => changePage()}
            className={page === title ? `${s.item} ${s.active}` : `${s.item}`}
        >{title}</li>
    );
}

export default ToPage;