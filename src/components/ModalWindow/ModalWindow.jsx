import { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const ModalWindow = ({
  isOpen,
  onClose,
  getContact,
  contact,
  boolean,
}) => {
  const [name, setName] = useState(contact?.name ?? '');
  const [number, setNumber] = useState(contact?.number ?? '');
  const [errorName, setErrorName] = useState('');
  const [errorNumber, setErrorNumber] = useState('');
  const [validName, setValidName] = useState(boolean);
  const [validNumber, setValidNumber] = useState(boolean);
  const [validForm, setValidForm] = useState(boolean);

  const handleInputName = e => {
    setName(e.target.value);
    const pattern =
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    if (pattern.test(e.target.value)) {
      setErrorName('');
      setValidName(true);
    } else {
      setErrorName('Wrong name format!');
      setValidName(false);
    }
  };

  const handleInputNumber = e => {
    setNumber(e.target.value);
    const pattern =
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
    if (pattern.test(e.target.value)) {
      setErrorNumber('');
      setValidNumber(true);
    } else {
      setErrorNumber('Wrong phone number format!');
      setValidNumber(false);
    }
  };

  const validationForm = () => {
    if (validName === true && validNumber === true) {
      setValidForm(true);
    }
    if (validName === false || validNumber === false) {
      setValidForm(false);
    }
  };

  useEffect(() => validationForm())

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = { name, number };

    getContact(e, newContact);

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleInputName}
            />
            <Text color="red">{errorName}</Text>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Number</FormLabel>
            <Input
              placeholder="Number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleInputNumber}
            />
            <Text color="red">{errorNumber}</Text>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={handleSubmit}
            isDisabled={!validForm}
          >
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

ModalWindow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  getContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  boolean: PropTypes.bool.isRequired,
};
