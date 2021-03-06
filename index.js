const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));
app.use('/lib', express.static('../lib'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))