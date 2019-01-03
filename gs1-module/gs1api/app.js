const express = require('express')
const bodyParser     = require('body-parser');
const cors = require('cors'); // addition we make
const fileUpload = require('express-fileupload'); //addition we mak

const app = express()
const port = 8000

//app.get('/', (req, res) => res.send('Hello World!'))

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());

require('./app/routes')(app, {});

app.listen(port, () => {
  console.log(`Customer app listening on port ${port}!`)
});
