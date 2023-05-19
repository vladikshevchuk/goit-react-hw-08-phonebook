import { ContactsList } from 'components/Contacts/Contacts';
import { FindNumberByName } from 'components/Find/FindNumberByName';

export const Contacts = () => {
  return (
    <div>
      <FindNumberByName />
      <ContactsList />
    </div>
  );
};

