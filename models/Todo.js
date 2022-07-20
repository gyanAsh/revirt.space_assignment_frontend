const mongoose = require('mongoose');
const TodoSchema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('todo', TodoSchema);