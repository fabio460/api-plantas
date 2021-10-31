const express = require('express');
const app = express();
const route = require('./routes/route');
const cors = require('cors')
  app.use(cors())
app.use(route)
app.listen(3001,console.log("iniciado "))