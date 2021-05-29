const express = require('express');
const router = express.Router();

const Contact = require('../models/radioBtn');


router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/', async (req, res) => {

  const { name, type } = req.body;

  try {
    const newContact = new Contact({
      name,
      type,
    });

    const contact = await newContact.save();

    res.json(contact);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
}
);

router.put('/:id', async (req, res) => {
  const { name, type } = req.body;

  // Build contact object
  const contactFields = {};
  if (name) contactFields.name = name;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    await Contact.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Contact removed' });
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
