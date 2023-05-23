import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { List, ListItem, Text } from '@chakra-ui/react';
import { Contact } from 'components/Contact/Contact';
import { FindNumberByName } from 'components/Find/FindNumberByName';
import { selectFilterQuery } from 'redux/filter/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const state = useSelector(selectFilterQuery);

  const getVisibleContacts = () => {
    const normalizedFilter = state.filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {contacts.length === 0 ? (
        <Text fontSize="5xl" textAlign="center" mt="30px">
          Create a contact
        </Text>
      ) : (
        <>
          <FindNumberByName />
          <List
            mt="16px"
            display="grid"
            gridTemplateColumns="1fr"
            gridGap="12px"
          >
            {getVisibleContacts().map(contact => (
              <ListItem key={contact.id}>
                <Contact contact={contact} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </>
  );
};
