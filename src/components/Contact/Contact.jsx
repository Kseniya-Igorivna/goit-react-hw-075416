import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.contact}>
      <span>
        <span className={styles.icon}>👤</span>
        <span className={styles.name}>{contact.name}</span>
      </span>
      <span className={styles.number}>{contact.number}</span>
      <button className={styles.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
