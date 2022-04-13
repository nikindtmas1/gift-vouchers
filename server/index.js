const express = require('express');
const app = express();

const mongooseConfig = require('./src/config/mongooseConfig');

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

mongooseConfig(app);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});