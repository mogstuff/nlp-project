
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

const dotenv = require('dotenv');
dotenv.config();

const meaningCloudeKey = {
    meaning_cloud_key = process.env.MEANING_CLOUD_KEY
};


const meaninCloudBaseUrl = 'https://api.meaningcloud.com/sentiment-2.1';


const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const { response } = require('express');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})

// adapted from the api docs 
// https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/dev-tools
app.post('/doit', (req, res) => {

    const formdata = new FormData();
    formdata.append("key", meaningCloudeKey.meaning_cloud_key);   
    formdata.append("lang", "en");
    formdata.append("url", req.body.url);

    const requestOptions = {
        method: 'POST',
        body: formdata
       
    };


    fetch(meaninCloudBaseUrl, requestOptions)
        .then(response => ({
            status: response.status,
            body: response.json()
        }))
        .then(data => response.send(data))
        .catch(error => console.error('error', error));
});