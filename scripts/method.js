var movie = {movieName:"Gaurdians of the Galaxy", studioName:"Disney", releaseYear:2014, genreType:"Action", movieInfo : function() {return this.movieName + " " + this.genreType + " " + this.releaseYear
}
            };
document.getElementById("movie").innerHTML = movie.movieInfo();
