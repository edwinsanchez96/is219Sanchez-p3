/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
// 
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//    
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating 
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = new Vue({
      el: '#vue_app',
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data: {
            // This holds your movies.json data.
            movies: [],

            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            title:"IMDB + Edwin's Top 8 Movies",
            owner:"Edwin",
            github:"https://github.com/edwinsanchez96/is219sanchez-p3"
      },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            makeTextDate: function(dateArray) {
                  var datestr = "";
                  if(dateArray[1]==1){
                        datestr+="January ";
                  }else if(dateArray[1]==2){
                        datestr+="February ";
                  }else if(dateArray[1]==3){
                        datestr+="March ";
                  }else if(dateArray[1]==4){
                        datestr+="April ";
                  }else if(dateArray[1]==5){
                        datestr+="May ";
                  }else if(dateArray[1]==6){
                        datestr+="June ";
                  }else if(dateArray[1]==7){
                        datestr+="July ";
                  }else if(dateArray[1]==8){
                        datestr+="August ";
                  }else if(dateArray[1]==9){
                        datestr+="September ";
                  }else if(dateArray[1]==10){
                        datestr+="October ";
                  }else if(dateArray[1]==11){
                        datestr+="November ";
                  }else{
                        datestr+="December ";
                  }
                  datestr+= dateArray[2]+", "+dateArray[0];
                  return datestr;
            },
            like(index) {
                  var newindex= index+1;
                  return newindex;
            },
            dislike: function(index) {
                  index+=1;
                  return index;
            },
            timeText: function(minutes) {
                  var timestr="";
                  timestr+= Math.floor(minutes/60)+"h "+minutes%60+"m";
                  return timestr;
            }
      }
})
	

