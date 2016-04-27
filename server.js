var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

var mongoose = require('mongoose');
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/myDb';
mongoose.connect(mongoUrl);

var modelImages = require('./db/models/modelimage');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/images.json', function(req, res) {
  modelImages.find({}, function(error, images) {
    res.json(images);
  });
});

app.listen(process.env.PORT || 9292);