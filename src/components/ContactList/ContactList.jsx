import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={style.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={style.listItem} key={id}>
            <Contact id={id} name={name} number={number} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
