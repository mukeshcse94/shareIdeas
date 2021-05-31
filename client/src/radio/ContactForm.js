import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from './ContactState';

const ContactForm = () => {
  const contactContext = useContext(GlobalContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;
  const [contact, setContact] = useState({ name: '', type: 'personal' });
  const { name, type } = contact;


  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({ name: '', type: 'personal' });
    }
  }, [contactContext, current]);


  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });


  const clearAll = () => {
    clearCurrent();
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };



  return (
    <form onSubmit={onSubmit}>
      <p className='text-primary' style={{ paddingTop: 20 }}>{current ? 'Edit User' : 'Add User'}</p>
      <input type='text' placeholder='Name' name='name' value={name} onChange={onChange} />

      <input type='radio' name='type' value='personal' checked={type === 'personal'}
        onChange={onChange}
      />{' '}
        Personal{' '}

      <input type='radio' name='type' value='professional' checked={type === 'professional'}
        onChange={onChange}
      />{' '}
        Professional

      <div><input type='submit' value={current ? 'Update Contact' : 'Add Contact'} /></div>
      {current && (<div><button onClick={clearAll}>Clear</button> </div>)}
    </form>
  );
};

export default ContactForm;
