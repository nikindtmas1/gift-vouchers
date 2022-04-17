const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

const mongooseConfig = require('./config/mongooseConfig');
const routes = require('./routes/routes');

const port = 5000;

// app.get('/', (req, res) => {
//     res.send('Hello world!');
// });

app.use(cors());
app.use(routes); 
mongooseConfig(app);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});