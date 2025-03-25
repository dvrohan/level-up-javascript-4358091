// Write your code here

class Book{
  constructor(title, author, isbn, numCopies){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  };

  get availability(){
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies == 0) {
      return "Out of stock";
    }
    else if (this.numCopies < 10) {
      return "Low Stock";
    }
    else {
      return "In Stock"
    }
  };

  sell(numSold = 1) {
    this.numCopies -= numSold
  };

  restock(numCopies = 1) {
    this.numCopies += numCopies
  };
}

const hungerGames = new Book("Hunger Games", "Author", 1234, 5);
console.log(hungerGames.availability);

hungerGames.restock(12);
console.log(hungerGames.availability);

hungerGames.sell(17);
console.log(hungerGames.availability);