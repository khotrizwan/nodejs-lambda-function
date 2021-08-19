// Requiring module
const express = require('express');
const add = require('./add');

//const addNum = (a, b) => { return a + b ;}
// Creating express object
const app = express();
 
// Handling GET request
app.get('/', (req, res) => {
    res.send('A simple <b>Hello World</b> Node App is '
        + 'running on this server ' + add.addNum(100, 20))
    res.end()
})
 
// Port Number
const PORT = process.env.PORT ||5010;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));