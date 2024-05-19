const express = require("express");
const app = express();
const taskRouter = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
// middleware
app.use(express.static("./public"));
app.use(express.json());
// routes
app.get("/hello", (req, res) => {
  res.send("TAST MANAGER");
});

app.use("/api/v1/tasks", taskRouter);

app.use(notFound);
// app.use(errorHandler);
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    const port = 3000;
    app.listen(port, () => console.log(`Server is running on ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
