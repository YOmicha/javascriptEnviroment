//libs for express
import express from 'express';
import path from 'path';
import open from  'open';
import webpack from 'webpack';
import config  from '../webpack.config.dev';

/* eslint-disable no-console */

//config express
const port =  4000; //port number

//app
const app = express();

//compiler
const compiler =  webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if (err){
    console.log(err);
  }else {
    open('http:/localhost:' + port);
  }
});


//api simulation

app.get('/users', function(req, res){
  res.json([
    {"id":1, "firstName":"BobA", "lastName":"SmithA","email":"m@m.com"},
    {"id":2, "firstName":"BobB", "lastName":"SmithB","email":"n@n.com"},
    {"id":3, "firstName":"BobC", "lastName":"SmithC","email":"n@n.com"}
  ]);
});
