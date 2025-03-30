const mongoose = require('mongoose');

const realstateSchema = mongoose.Schema({
    realstatename: {
        type: String,
    },
    mobilenumber: {
        type: String,
    },
    selectedDesigner: {
        type: String,
    },
    designVision: {
        type: String,
    }

})

const realstateModel= mongoose.model('realstate',realstateSchema);

module.exports = realstateModel;