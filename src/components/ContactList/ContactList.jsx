import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  return (
    <div className={styles.contactList}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}
