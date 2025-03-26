// Write your code here

class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director,
      this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  };
};

Movie.prototype.getOverview = function () {
  return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
};

const transformers = new Movie("Transformers", "Michael Bay", "Sci-Fi", 2015, 4);

console.log(transformers.getOverview());