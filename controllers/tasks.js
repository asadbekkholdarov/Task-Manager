const express = require("express");
const Task = require("./../model/task");
const asyncWrapper = require("./../middleware/async");
exports.getAllTasks = asyncWrapper(async (req, res) => {
  const data = await Task.find();
  res.send({
    status: "success",
    length: data.length,
    data: {
      data,
    },
  });
});

exports.createTask = asyncWrapper(async (req, res) => {
  const data = await Task.create(req.body);
  res.send({
    status: "Success",
    data: data,
  });
});

exports.getTask = asyncWrapper(async (req, res) => {
  const data = await Task.findById(req.params.id);
  res.send({
    status: "sucess",
    data: {
      data,
    },
  });
});
exports.updateTask = asyncWrapper(async (req, res) => {
  const data = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.send({
    status: "success",
    data: "Updated",
  });
});

exports.deleteTask = asyncWrapper(async (req, res) => {
  const data = await Task.findByIdAndDelete(req.params.id);
  res.send({
    status: "Success",
    data: "Successfully deleted",
  });
});
