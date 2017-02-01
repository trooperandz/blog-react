const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/app/public')));

app.listen(5004, () => {
    console.log('App is listening on port ', 5004);
});