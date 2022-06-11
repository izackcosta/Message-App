const express = require('express');

const Message = require('../models/message.model');

const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/messages', (req,res)=>
{
    Message.find()
    .then(messages => res.json(messages))
    .catch(err =>{console.log(err);})
})

router.post('/messages', async (req,res)=>
{
    const text = req.body.text;
    const newMessage = new Message({text : text});
    await newMessage.save();
    res.status(200).send();
})

module.exports = router;