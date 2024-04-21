
//praktyczne 1 

const person ={
    username: "Maciej",
    ShowName: function (){
        console.log("Username: " + this.username);
    }
};

person.ShowName() // Wynik Username: Maciej

// praktyczne 2 - rozszerzenie 

const bookshelf = {
    authors: [],
    getAuthors: function() {
      return this.authors;
    },
    addAuthor: function(authorName) {
      this.authors.push(authorName);
    }
  };
  
  //dodatkowe testy


  // Dodawanie autorów do półki na książki
  bookshelf.addAuthor("Stephen King");
  bookshelf.addAuthor("J.K. Rowling");
  bookshelf.addAuthor("Haruki Murakami");
  
  // Pobieranie listy autorów
  const authorsList = bookshelf.getAuthors();
  console.log("Lista autorów na półce z książkami:", authorsList);
  




  
  