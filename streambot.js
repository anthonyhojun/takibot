const twit = require('twit');
const fetch = require('node-fetch');
const config = require('./config');
const moment = require('moment');
const url = config.slack_webhook;


const T = twit(config)

const tweetParams = {
    track: '@takiapp'
}

const stream = T.stream('statuses/filter', tweetParams)
 
stream.on('tweet', function (tweet) {
    const momentDate = new Date(tweet.created_at);
    const prettyDate = moment(momentDate).format('MMM Do YYYY h:mm a');

    //if (data.statuses.retweeted_status == undefined) {}
    // console.log(prettyDate + '\n' +
    // tweet.user.screen_name + ": " + 
    // tweet.text);

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({'text': prettyDate + '\n' +
        tweet.user.screen_name + ": " + 
        tweet.text})
    })
    
})



    




// const takiTweetParams = {
//     q: '@takiapp', 
//     result_type: 'recent', 
//     count: 50
// }


// T.get('search/tweets', takiTweetParams, function(err, data, response) {
//     const tweetParse = data.statuses;
// //    console.log(data)
    
//     for(i = 0; i < tweetParse.length; i++) {

//         const momentDate = new Date(data.statuses[i].created_at);
//         const prettyDate = moment(momentDate).format('MMM Do YYYY h:mm a');

//         if (data.statuses[i].retweeted_status == undefined && 
//             data.statuses[i].user.screen_name != 'takiapp') {
//                 console.log(prettyDate + '\n' +
//                 data.statuses[i].user.screen_name + ": " + 
//                 data.statuses[i].text);
        
//         }
//     }

// })

