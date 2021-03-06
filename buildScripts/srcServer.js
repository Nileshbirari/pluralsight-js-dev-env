import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);
/* eslint-disable no-console */
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo:true,
  publicPath: config.output.publicPath}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res){

res.json([
  {"id": 1, "fname":"nilesh", "lname":"Birari"},
  {"id":2,   "fname":"ramesh", "lname":"pawar"},
  {"id":3, "fname":"ritesh", "lname":"lokhande"},
  {"id":4, "fname":"aniket", "lname":"wagh"},
]);

});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' +port);
  }
});
