const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter Task Name must have"],
    trim: true,
    maxlength: [20, "Name can not be more than 20 chars"],
    minlength: [2, "Name can not be less than 2 chars"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
