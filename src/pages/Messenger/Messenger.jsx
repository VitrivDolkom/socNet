import s from "./s.module.scss";

const Messenger = () => {
    return (
        <div className={`${s.wrap} `}>
            <ul className={`${s.userList}`}>
                <li>Dima</li>
                <li>Andrey</li>
                <li>Vika</li>
                <li>Kirill</li>
            </ul>
            <div className={`${s.dialog}`}>
                Hi
                How are you?
            </div>
        </div>
    );
}

export default Messenger;