const express = require('express');
app = express();
const PORT = 5000;

app.get('/', function(req, res){
    res.send('Hello from node');
});

app.listen(PORT, function(){
    console.log('server has started on' + PORT);
})