# liri-node-app
language interpretation and recognition interface for spotify, omdb and bands-in-town api

# relevant commands
after downloading navigate to the root directory and type 'node liri' followed by one of the following arguments and a search parameter of your choosing.
1. _spotify-this-song_
uses the spotify api to return song data for the track title entered
2. _concert-this_
uses the bands-in-town api to return upcoming concert dates for the band/artist entered
3. _movie-this_
uses the OMDB api to return info for the movie title entered.
4. _do-what-it-says_
uses the random.txt file located in the root directory to perform one of these commands with the query parameter specified.
i.e: node liri do-what-it-says 
(returns song/movie/event data based on random.txt which should be formatted [desired-command,"search parameter"]
