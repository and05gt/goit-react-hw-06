import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import style from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(filters.toLowerCase().trim())
  );
  const dispatch = useDispatch();

  return (
    <ul className={style.contactList}>
      {visibleContacts.map((contact) => {
        return (
          <li className={style.listItem} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              onDelete={() => dispatch(deleteContact(contact.id))}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
