const express = require('express');

const mongoose = require('mongoose');
require("dotenv").config();

const cors = require('cors');

const routes = require('./routes/ToDoRoutes');

const app = express();

app.use(express.json())
app.use(cors());

app.use(routes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error(err));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});