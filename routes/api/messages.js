const express = require ('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Message = require('../../models/Message');

// @route   POST api/messages/
// @desc    Send a message
// @access  Public
router.post('/', async (req, res) => {
    try {

        const {
            name, 
            email,
            formMessage
        } = req.body;

        const message = new Message({
            name: name,
            email: email,
            message: formMessage,
        });

        await message.save();

        res.status(200).json({ msg: 'Message sent! I will get back to you in 1-3 days.' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


module.exports = router;