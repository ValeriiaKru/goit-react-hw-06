import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css';

function Contact({ id, name, number, onDeleteContact }) {
    return (
        <li className={css.contactList}>
            <div className={css.contactContainer}>
                <FaUser />
                <p>{name}</p>
            </div>
            <div className={css.contactContainer}>
                <FaPhoneAlt />
                <p>{number}</p>
            </div>
            <button
            className={css.deleteBtn}
            type="button"
            onClick={() => onDeleteContact(id)}
            >
Delete
            </button>
        </li>
    );
}

export default Contact;