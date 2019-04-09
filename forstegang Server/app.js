const express = require('express');
const app = express();

app.use('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

require('./routes/index')(app);

app.listen(3333);
console.log(`Serveren er started på http://localhost:3333`);