const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        maxlength: 20
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Task",TaskSchema);