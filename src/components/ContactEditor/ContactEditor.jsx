import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useDisclosure } from '@chakra-ui/react';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { Button } from '@chakra-ui/react';

export const ContactEditor = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getContact = (e, newContact) => {
    e.preventDefault();

    dispatch(addContact(newContact));

    onClose();
  };

  return (
    <>
      <Button type="button" onClick={onOpen} colorScheme="blue">
        Create contact
      </Button>
      <ModalWindow isOpen={isOpen} onClose={onClose} getContact={getContact} />
    </>
  );
};
