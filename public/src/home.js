function addHelper(parameter){
    var total = 0;
    for (total in parameter){
        total++;
    }
    return total;
}

function getTotalBooksCount(books) {
    return addHelper(books)
}

function getTotalAccountsCount(accounts) {
    return addHelper(accounts)
}

function getBooksBorrowedCount(books) {
    const currentlyBorrowed = books.reduce((acc, book) => {
        for (let i = 0; i < book.borrows.length; i++){
            if(book.borrows[i].returned === false){
                acc++;
            }
        }
        return acc;
    }, 0)
    return currentlyBorrowed;
}

  function getMostCommonGenres (books) {
	let genres = books.reduce((acc, book) => {
		acc[book.genre] != null ? acc[book.genre].count++ : acc[book.genre] = { name: book.genre, count: 1 }
		return acc
	}, {})
	return Object.keys(genres)
		.map(genre => genres[genre])
		.sort((a,b) => b.count - a.count)
		.slice(0,5)
}
              
function getMostPopularBooks(books) {
  const mostPopular = books.map((book) => {
    const {title, borrows} = book;
    return {name: title, count: borrows.length};
  });
  const sortedBooksInStore = mostPopular.sort((bookA, bookB) => bookB.count-bookA.count);
  return (sortedBooksInStore.length > 5) ? (sortedBooksInStore.slice(0,5)) : (sortedBooksInStore);
};

function getMostPopularAuthors (books, authors) {
  return authors.reduce((acc, author) => {
    const thisAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    books.forEach(book => {
      if (book.authorId === author.id) {
        thisAuthor.count += book.borrows.length
      }
    });
    acc.push(thisAuthor);
    return acc;
  }, [])
    .sort((a,b) => b.count - a.count)
    .slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
