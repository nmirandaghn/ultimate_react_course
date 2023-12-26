const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();
const book = getBook(2);

/*
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

// Destructuring
// const [primaryGenre, secondaryGenre] = genres;
// primaryGenre;
// secondaryyGenre;

// Rest/Spread operator
// Rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
primaryGenre;
secondaryGenre;
otherGenres;

//Spread operator
const newGenres = [...genres, "epic fantasy"];
newGenres;

// Adding/overriding properties
const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19", // Adding a new property
  pages: 1210, // Overriding a new property
};
updatedBook;

// Arrow functions
// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];

const year = getYear(publicationDate);
year;

// Template literals
const summary = `${title}, ${pages} pages long book, was written by ${author} and published in ${getYear(
  book.publicationDate
)}`;
summary;

// Ternary operator
const pagesRange = pages > 1000 ? "over a thousand" : "less than one thousand";
pagesRange;

const printRange = `Book ${title} is ${pagesRange} pages and is has ${
  hasMovieAdaptation ? "" : "not "
}been adapted as a movie`;
printRange;

// Short circuiting
console.log(true && "Some string");
console.log(false && "Some string");
console.log(getBook(1) && "This book has a movie");

// falsy: 0, '', null, undefined
console.log("nmiranda" && "Some string");
console.log(0 && "Some string");

console.log(true || "Some string");
console.log(false || "Some string");

console.log(getBook(1));
console.log(getBook(1).translations.spanish);
const spanishTranslation = book.translations.spanish || "Translated to spanish";
spanishTranslation;

console.log(getBook(2).translations.chinese);
const chineseTranslation = getBook(2).translations.chinese || "Not translated";
chineseTranslation;

const count = book.reviews.librarything.reviewsCount ?? "no data";
console.log(count);

// Optional chaining
function getTotalReviewCount(book) {
  const goodReads = book.reviews?.goodreads.reviewsCount;
  const libraryThing = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodReads + libraryThing;
}

console.log(getTotalReviewCount(getBook(3)));

// Array map method
console.log([1, 2, 3, 4].map((x) => x ** 2));
console.log(books.map((book) => book.title));
console.log(
  books.map((book) => `The book "${book.title}" was written by ${book.author}`)
);
console.log(
  books.map((book) => ({
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
  }))[0]
);

// Array filter method
console.log(books.filter((book) => book.pages > 1000));
console.log(books.filter((book) => book.hasMovieAdaptation));

// Array reduce method
console.log(books.reduce((acc, book) => acc + book.pages, 0));
console.log(
  books.reduce((acc, book) => acc + book.reviews.goodreads.reviewsCount, 0)
);

// Array sort method
console.log([0, 3, 2, 1, 4, -1].sort((a, b) => b - a));

const arr = [0, 3, 2, 1, 4, -1];
console.log(arr.slice().sort((a, b) => b - a)); // Copy the array

console.log(books.slice().sort((a, b) => b.pages - a.pages));
console.log(
  books
    .map((b) => ({ title: b.title, pages: b.pages }))
    .sort((a, b) => a.pages - b.pages)
);

// Working with immutable arrays

// 1. Add book to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2. Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id != 3);
booksAfterDelete;

// 3. Update a book in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdate;

*/
// Promises
fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
  res.json().then((data) => {
    console.log(data);
  });
});

fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
  res.json().then((data) => console.log(data))
);

// Async/Wait
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();
console.log("nmiranda");
