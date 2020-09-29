console.log('I am starting...');
const Twit = require('twit');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env'});

// const config = require('./config/config');
// const T = new Twit(config);

// Authenticate/Login user
const T = new Twit({
  consumer_key: process.env.CK,
  consumer_secret: process.env.CS,
  access_token: process.env.AT,
  access_token_secret: process.env.ATS,
})

// Get tweet data
const params = {
  q: 'hiring',
  count: 2
}
T.get('search/tweets', params, gotData )
function gotData(err, data, response) {
  // console.log(data);
  const tweets = data.statuses;
  for ( let i of tweets ) {
    console.log(tweets[i].text)
  }
}


// Post tweet data
const tweet = {
  status: '#tweet using node.js'
}
T.post('statuses/update', tweet, tweeted )

function tweeted(err, data, response) {
  console.log(data);
}