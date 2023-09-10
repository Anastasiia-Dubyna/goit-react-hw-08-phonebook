import { Contacts } from './Contacts';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/selectors';

export function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  return contacts.map(item => {
    return <Contacts key={item.id} contact={item} />;
  });
}
