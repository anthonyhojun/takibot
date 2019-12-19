const twit = require('twit');
const fetch = require('node-fetch');
const config = require('./config');
const moment = require('moment');

const T = twit(config)

const takiTweetParams = {
    q: '@takiapp', 
    result_type: 'recent', 
    count: 50
}


T.get('search/tweets', takiTweetParams, function(err, data, response) {
    const tweetParse = data.statuses;
//    console.log(data)
    
    for(i = 0; i < tweetParse.length; i++) {

        const momentDate = new Date(data.statuses[i].created_at);
        const prettyDate = moment(momentDate).format('MMM Do YYYY h:mm a');

        if (data.statuses[i].retweeted_status == undefined && 
            data.statuses[i].user.screen_name != 'takiapp') {
                console.log(prettyDate + '\n' +
                data.statuses[i].user.screen_name + ": " + 
                data.statuses[i].text);
        
        }
    }

})

