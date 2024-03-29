import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import {
  contactsErrorSelector,
  contactsLoadingSelector,
  contactsSelector,
  visibleContactsSelector,
} from 'store/selectors';

export const ContactList = () => {
  const contacts = useSelector(contactsSelector);

  const isLoading = useSelector(contactsLoadingSelector);
  const error = useSelector(contactsErrorSelector);
  const visibleContacts = useSelector(visibleContactsSelector);

  const filteredContacts = contacts.length ? visibleContacts : [];

  return isLoading ? (
    <b>Loading contacts...</b>
  ) : error ? (
    <b>Error has occured: {error}</b>
  ) : (
    <ul>
      {filteredContacts.length !== 0 ? (
        filteredContacts.map(contact => (
          <Contact
            name={contact.name}
            number={contact.number}
            key={contact.id}
            dataid={contact.id}
          />
        ))
      ) : (
        <p>No contacts saved</p>
      )}
    </ul>
  );
};
