const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({

    eventName: {
        type: String,
        required: [true, "an't be blank"],
    },

    recipient: {

        type: String,
        required: [true, "an't be blank"],
    },

    amount: {

        type: Number,
        required: [true, "an't be blank"],
    },

    hash :  {

        type: String,
        required: [true, "an't be blank"],
    },

    data : {

       type: Object,
       required: [true, "an't be blank"],
    },

    



    

}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);