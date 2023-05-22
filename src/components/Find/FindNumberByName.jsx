import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

export const FindNumberByName = () => {
  const dispatch = useDispatch();

  const handleFindNumber = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <FormControl mt="16px">
      <FormLabel>Find number by name</FormLabel>
      <Input type="text" onChange={handleFindNumber} />
    </FormControl>
  );
};
