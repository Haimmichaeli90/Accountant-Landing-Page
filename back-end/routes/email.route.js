const express = require('express');
const { sendContactEmail } = require('../services/emailService');
const Contact = require('../models/contact.model');

const router = express.Router();

router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        await sendContactEmail({
            fromName: name,
            fromEmail: email,
            message
        });

        const newContact = new Contact({ name, email, message });
        await newContact.save();

        res.status(200).json({ success: true, msg: 'Email sent and saved successfully' });
    } catch (err) {
        console.error('Error sending email or saving:', err);
        res.status(500).json({ error: 'Failed to send and save email' });
    }
});

module.exports = router;
