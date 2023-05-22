import { useSelector } from 'react-redux';
import { selectAllContacts} from 'redux/contacts/selectors';
import { Contact } from 'components/Contact/Contact';
import { List, ListItem } from '@chakra-ui/react';
import { FindNumberByName } from 'components/Find/FindNumberByName';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const state = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = state.filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <FindNumberByName />
      {contacts.length > 0 && 
      <List mt="16px" display="grid" gridTemplateColumns="1fr" gridGap="12px">
        {getVisibleContacts().map(contact => (
          <ListItem key={contact.id}>
            <Contact contact={contact} />
          </ListItem>
        ))}
      </List>}
    </>
  );
};
