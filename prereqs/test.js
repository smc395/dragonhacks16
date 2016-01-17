'use strict';

var watson = require('watson-developer-cloud');
var fs = require('fs');

var visual_recognition = watson.visual_recognition({
  //url: 'https://gateway-d.watsonplatform.net/visual-recognition-beta/api',
  username: 'b5738cac-acba-4f36-966c-812160cf88b8',
  password: 'vYo97CXLV30p',
  version: 'v2-beta',
  version_date: '2015-12-02'
});

var params = {
  // must be a .zip file containing images
  images_file: fs.createReadStream('./car.png')
};

visual_recognition.classify(params, function(err, res) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(res, null, 2));
});
