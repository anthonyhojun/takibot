const fetch = require('node-fetch');
const config = require('./config');
const url = config.slack_webhook;

fetch(url, {
    method: 'POST',
    body: JSON.stringify({'text': 'text'})
})
    