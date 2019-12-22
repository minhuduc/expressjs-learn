const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user.route');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/', function (req, res) {
  //res.send('<h1>Hello World ne</h1>') send => string
  res.render('index', {
  	name: 'BBB'
  });
});

app.use('/users', userRoute);

app.listen(port, () => console.log('server start in port ',port ));