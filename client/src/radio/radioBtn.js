import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalProvider } from './ContactState';
import Contacts from './Contacts';
import ContactForm from './ContactForm';


const RadioBtn = () => {
  return (
    <GlobalProvider>
      <Router>
        <ContactForm />
        <Contacts />
      </Router>
    </GlobalProvider>
  );
};

export default RadioBtn;
