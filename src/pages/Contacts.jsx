import { ContactEditor } from "components/ContactEditor/ContactEditor";
import { ContactList } from "components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectLoading } from "redux/contacts/selectors";

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
};

