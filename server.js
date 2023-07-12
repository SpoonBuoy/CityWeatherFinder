var express = require('express');
const bodyParser = require('body-parser');
var infoRouter = require('./Routes/info.routes');
const path = require('path');

var app = express();

//app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  })

app.use('/getWeather', infoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).json({
    message: "No such route exists"
  })
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: "Error Message"
  })
});
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });