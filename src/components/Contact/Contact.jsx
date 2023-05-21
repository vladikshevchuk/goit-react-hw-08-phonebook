import { useDisclosure } from '@chakra-ui/react';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from 'redux/contacts/operations';
import { Button, Text, WrapperContact } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getContact = (e, editedContact) => {
    e.preventDefault();

    dispatch(updateContact(contact.id));

    onClose();
  };

  return (
    <WrapperContact>
      <Text>
        {contact.name}: {contact.number}
      </Text>
      <Button onClick={onOpen}>Edit</Button>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
      <ModalWindow
        isOpen={isOpen}
        onClose={onClose}
        getContact={getContact}
        contact={contact}
      />
    </WrapperContact>
  );
};
