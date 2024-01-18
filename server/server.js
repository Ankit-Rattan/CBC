const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
dotenv.config({ path: "./.env" });


app.use(express.json());

app.use(require("./router/auth"))



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
