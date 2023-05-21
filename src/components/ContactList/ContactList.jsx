import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { Contact } from 'components/Contact/Contact';
import { List, ListItem } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <List
      mt="16px"
      display="grid"
      gridTemplateColumns="1fr"
      gridGap="12px"
    >
      {contacts.map(contact => (
        <ListItem key={contact.id} >
          <Contact contact={contact} />
        </ListItem>
      ))}
    </List>
  );
};
