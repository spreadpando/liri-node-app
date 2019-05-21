require('dotenv').config();
var axios = require('axios');
var moment = require('moment');
var fs = require('fs');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
//set query searchArray[1]
var searchArray = [process.argv[2], process.argv.slice(3).join('+')];
function liri(arr) {
    switch (arr[0]) {
        case 'concert-this':
            axios({
                method: 'get',
                url: 'https://rest.bandsintown.com/artists/' + arr[1] + '/events?app_id=codingbootcamp'
            }).then(function (response) {
                for (let i = 0; i < response.data.length; i++) {
                    console.log(`
                    Venue: ${response.data[i].venue.name}
                    Location: ${response.data[i].venue.city}, ${response.data[i].venue.region}, ${response.data[i].venue.country}
                    Date: ${response.data[i].datetime}
                    `);

                }
            }).catch(function (error) {
                console.log("try another query");
            });
            break;

        case 'spotify-this-song':
            spotify.search({ type: 'track', query: arr[1] }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
                let track = data.tracks.items[0]
                let artists = [];
                for (let i = 0; i < track.album.artists.length; i++) {
                    artists.push(track.album.artists[i].name)
                }
                console.log(`
            Artists: ${artists.join(', ')}
            Track Title: ${track.name}
            Link: ${track.external_urls.spotify}
            Album: ${track.album.name}            
            `);
            });



            break;

        case 'movie-this':
            axios({
                method: 'get',
                url: 'https://www.omdbapi.com/?apikey=trilogy&t=' + arr[1] + '&plot=short'
            }).then(function (response) {
                console.log(`
                Title: ${response.data.Title}
                Release Year: ${response.data.Year}
                IMDB Rating: ${response.data.Ratings[0].Value}
                Rotten Tomatoes Score: ${response.data.Ratings[1].Value}
                Country: ${response.data.Country}
                Language: ${response.data.Language}
                Plot: ${response.data.Plot}
                Actors: ${response.data.Actors}
                `);
            }).catch(function (error) {
                console.log("try another query");
            });
            break;
        case 'do-what-it-says':
            fs.readFile(('random.txt'), 'utf-8', function (err, data) {
                if (err) throw err;
                liri(data.split(','));
            });

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
}
liri(searchArray);