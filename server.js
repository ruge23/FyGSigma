const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/node_modules`));
app.use(express.static(`${__dirname}/dist`));


app.get('/', function(req, res){
  res.readFile(`${__dirname}/dist/index.html`)
});

app.listen(3000, function(){
  console.log('Server listening in Port 3000')
});
