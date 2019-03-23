const express=require('express');
const https= require('https');
const axios = require('axios');
var bodyParser = require('body-parser');
const app= express();
app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


 axios.get('https://api.unsplash.com/photos/?client_id=20155b39b60f6e899f69b225eb0e4b86046b8df6d420433946cada50010e21d6&page=1')
  .then(response => {
    console.log(response.data);
     global.mydata=response.data;
    //console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });  


app.get('/', function(req, res){
    res.render('index.html', );
    });


    app.get('/about', function(req, res){
      res.render('about.html', );
      });
  


  console.log("App running on: localhost:3000");
app.listen(app.get('port'), function() {
});
