
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const port = process.env.PORT || 8081;

dotenv.config();

const mcKey = process.env.MEANING_CLOUD_KEY;

const express = require('express');
const mockAPIResponse = require('./mockAPI.js')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html') ;
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})


app.post('/postData', bodyParser.json(), async (req, res) => {
  
    let articleUrl = req.body.url;
    let apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${mcKey}&lang=auto&url=${articleUrl}`;

    const payLoad = await fetch(apiUrl, {
        method: 'POST'
    });

    try {
        const payLoadData = await payLoad.json();
        res.send(payLoadData);
    } catch (error) {
        console.error("error retreiing data from Meaning Cloud API", error);
    }


})