import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { Contact } from 'components/Contact/Contact';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <List>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </List>
  );
};
