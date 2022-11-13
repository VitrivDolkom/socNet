import s from "./s.module.scss";


const ToPages = ({ title, changePage, page }) => {
    return (page === title ?
        <li onClick={() => changePage()}
            className={`${s.item} ${s.active}`}
        >{title}</li>
        :
        <li onClick={() => changePage()}
            className={`${s.item}`}
        >{title}</li>
    );
}

export default ToPages;