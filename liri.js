require('dotenv').config();
var axios = require('axios');
var moment = require('moment');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
//set query param
var query = process.argv[3];
switch (process.argv[2]) {
    case 'concert-this':
        axios({
            method: 'get',
            url: 'http://bit.ly/2mTM3nYhttps://rest.bandsintown.com/artists/' + query + '/events?app_id=codingbootcamp',
            responseType: 'stream'
        })
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });


        break;
    case 'spotify-this-song':

        break;
    case 'movie-this':

        break;
    case 'do-what-it-says':

        break;
    default:
        //catch error
        console.log(`command not recognized; use:
        node liri.js concert-this,
        node liri.js spotify-this-song,
        node liri.js movie-this,
        node liri.js do-what-it-says`)
        break;

}