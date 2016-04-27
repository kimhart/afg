var mongoose = require('mongoose');
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/myDb';

mongoose.connect(mongoUrl, function(err) {
  if (err) {
    console.log('Connection Error', err);
  } else {
    console.log('Connection Successful');
  }
});

var modelImage = require('../models/modelimage.js');

modelImage.remove({}, function(err) {
  if(err) {return done(err)}
});

i1 = new modelImage({"name": "img1", "src": "img/1.jpg"})
i2 = new modelImage({"name": "img2", "src": "img/2.jpg"})
i3 = new modelImage({"name": "img3", "src": "img/3.jpg"})
i4 = new modelImage({"name": "img4", "src": "img/4.jpg"})
i5 = new modelImage({"name": "img5", "src": "img/5.jpg"})
i6 = new modelImage({"name": "img6", "src": "img/6.jpg"})

i1.save();
i2.save();
i3.save();
i4.save();
i5.save();
i6.save();
