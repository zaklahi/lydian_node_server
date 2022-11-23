const express = require('express');
const express = require('express');

const app = express():
const port = 50001;

app.use(express.static('server/public'));

const quoteList = require('./modules/quoteList')

app.listen(port, () => {
    console.log("listenign on port, ", port)
    
});

app.get('/quotes', function(req, res) {
    console.log('request made');
    res.send(quoteList);
});

// control + c closes c



// C- POST
// R- get
// U- 