const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World ne')
})
 
app.listen(3000, () => console.log('server start'));