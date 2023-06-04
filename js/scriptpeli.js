console.log("Script loaded");
var urlParams = new URLSearchParams(window.location.search);
var movieId = urlParams.get("id");
var movieTitle = urlParams.get("title");
var movieImage = urlParams.get("image");
var movieDescription = urlParams.get("description");
var movieUrl = urlParams.get("url");
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

document.getElementById("movie-title").textContent = movieTitle;
console.log(movieTitle);
document.getElementById("movie-image").src = movieImage;
document.getElementById("movie-description").textContent = movieDescription;


if (movieUrl) {
  var iframe = document.getElementById("movie-url");
  iframe.src = movieUrl;
}



function onYouTubeIframeAPIReady() {
  
  var container = document.getElementById("youtube-video");

 
}
document.addEventListener("DOMContentLoaded", function() {
  var urlParams = new URLSearchParams(window.location.search);
  var movieTitle = urlParams.get("title");


  document.title = movieTitle;

 
  var movieTitleElement = document.getElementById("movie-title");
  movieTitleElement.textContent = movieTitle;
});

function goBack() {
  window.history.back();
}

