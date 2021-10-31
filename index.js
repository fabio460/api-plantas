const express = require('express');
const app = express();
const route = require('./routes/route');
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 3001;
  app.use(cors())
app.use(route)
app.listen(PORT,console.log("iniciado "))