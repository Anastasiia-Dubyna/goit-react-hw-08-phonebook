import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { List, Item, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};
