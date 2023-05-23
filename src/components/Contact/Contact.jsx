import { useDisclosure } from '@chakra-ui/react';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from 'redux/contacts/operations';
import { Box, Text, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getContact = (e, editedContact) => {
    e.preventDefault();
    const { name, number } = editedContact;

    dispatch(updateContact({id: contact.id, name, number}));

    onClose();
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap="8px"
      padding="4px"
      pl="16px"
      border="1px"
      borderColor="#2a2a2a"
      borderRadius="4px"
    >
      <Text>
        {contact.name}: {contact.number}
      </Text>
      <Box>
        <Button onClick={onOpen} colorScheme="blue" mr="10px">
        Edit
      </Button>
      <Button type="button" onClick={handleDelete} colorScheme="blue">
        Delete
      </Button>
      </Box>
      <ModalWindow
        isOpen={isOpen}
        onClose={onClose}
        getContact={getContact}
        contact={contact}
        boolean={true}
      />
    </Box>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })
};