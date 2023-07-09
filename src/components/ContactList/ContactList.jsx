import PropTypes from 'prop-types';
import { List, ListItem, Button, ContactDetail } from './ContactList.styled';


const ContactList = ({ list, onDeleteContact }) => {
    return (
        <List>
          {list.map(({ id, name, number }) => (
              <ListItem key={id}>
                <ContactDetail>{name}</ContactDetail>
                <ContactDetail>{number}</ContactDetail>
                <Button type="button" onClick={() => onDeleteContact(id)}>
                  Delete contact
                </Button>
              </ListItem>
            ))}
        </List>
    )
}

export default ContactList;

ContactList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.object.isRequired,
      ),
    onDeleteContact: PropTypes.func.isRequired
}