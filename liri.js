require("dotenv").config();
let moment = require("moment");

var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");
var axios = require("axios");



let command = process.argv[2];

//movie calling with axios and OMDB
if (command === "movie-this") {

    let movieName = process.argv.slice(3).join(" ");


    console.log("searching for movie...");
    //console.log("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy");

    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            console.log("The movie's imdb rating is: " + response.data.imdbRating);

            console.log("The movie's release year is: " + response.data.Released);

            console.log("The movie's title is: " + response.data.Title);

            console.log("The movie's rotten tomatoes rating is: " + response.data.Ratings[1].Value);

            console.log("The movie's country of production is: " + response.data.Country);

            console.log("The movie's language is: " + response.data.Language);

            console.log("The movie's actors are: " + response.data.Actors);

            console.log("The movie's plot is: " + response.data.Plot);
        }
    );
};







//bandsintown api search

if (command === "concert-this") {

    let artist = process.argv.slice(3).join(" ");

    console.log("searching for artist...");

    //console.log("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            let upcomingConcerts = response.data;

            for (i = 0; i < upcomingConcerts.length; i++) {


                let concert = upcomingConcerts[i];

                console.log(`${moment(concert.datetime).format("MM/DD/YYYY")} at ${moment(concert.datetime).format("LT")} in ${concert.venue.city}, ${concert.venue.country}`);
            }


        });

}

//Spotify search

// if (command = "spotify-this-song") {

//     let song = process.argv.slice(3).join(" ");

//     spotify
//     .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(err) {
//    console.error('Error occurred: ' + err);
//  }); 

//     // spotify.search({type: "track", query: song}, function (err, data) {

//     //     console.log("searching for song...");

//     //     if (err) {
//     //         return console.log("Error occurred: " + err);
//     //     } 
//     //     else {

//     //         let info = data.tracks.items[0];

//     //         console.log(`Title: "${info.name}"`);

//     //         let artists = [];

//     //         for (i = 0; i < info.artists.length; i++) {
//     //             artists.push(info.artists[i].name);
//     //         };

//     //         console.log(`Artist(s): ${artists.join(", ")}`);

//     //         console.log(`Album: ${info.album.name}`);

//     //         console.log(`Preview: ${info.preview_url}`);



//     //     }

//     // })
// }