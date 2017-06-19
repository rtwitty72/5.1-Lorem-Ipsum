const express = require('express');
const app = express();

var loremIpsum = require('lorem-ipsum');
var output = loremIpsum({
   count: 3, units: 'paragraphs', format: 'html'

});

// app.use('/lorem', express.static("public"));

app.get('/lorem', function(req, res){
    res.send(output);
  });

app.listen(3000, function(){
  console.log("Express app listening for connections");
});
