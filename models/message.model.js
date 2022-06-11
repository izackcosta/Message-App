const mongoose = require('mongoose');

const messageSchema = mongoose.Schema
(
    {
        text: String
    }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;