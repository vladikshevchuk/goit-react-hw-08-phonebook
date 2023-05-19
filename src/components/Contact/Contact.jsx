import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button, Text, WrapperContact } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <WrapperContact>
      <Text>
        {contact.name}: {contact.number}
      </Text>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </WrapperContact>
  );
};
