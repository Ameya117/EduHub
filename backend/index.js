const connectToMongo = require('./db');
const express = require('express');
const User = require('./models/User');
const cors = require('cors')
const app = express();

app.use(cors());

const port = 4000;
connectToMongo();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/api/auth',require('./routes/auth'));



app.listen(port, () => {
    console.log(`Notebook backend listening at http://localhost:${port}`)
  })