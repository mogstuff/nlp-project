
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8081;

dotenv.config();

const express = require('express');
const mockAPIResponse = require('./mockAPI.js')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')  ;
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log(`Example app listening on port ${port}!`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})


app.post('/post,', (req, res) => {
    console.log("post data: ");
    console.log(req.body);
    url = req.body
})